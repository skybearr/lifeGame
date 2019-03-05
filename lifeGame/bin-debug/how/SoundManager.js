var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var how;
(function (how) {
    /**
     * 声音管理器
     * 必须要预加载所有声音文件
     */
    var SoundManager = (function () {
        function SoundManager() {
        }
        Object.defineProperty(SoundManager, "musicVolume", {
            get: function () {
                return this._musicVolume;
            },
            set: function (value) {
                this._musicVolume = value;
                if (this.music) {
                    this.music.volume = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SoundManager, "effectVolume", {
            get: function () {
                return this._effectVolume;
            },
            set: function (value) {
                this._effectVolume = value;
                // for (var i: number = 0; i < this.effectList.length; i++) {
                //     this.effectList[i].volume = value;
                // }
            },
            enumerable: true,
            configurable: true
        });
        SoundManager.init = function (stage, root) {
            this.root = root;
            if (!this.isInited) {
                this.isInited = true;
                stage.addEventListener(egret.Event.DEACTIVATE, this.onAppPause, this);
                stage.addEventListener(egret.Event.ACTIVATE, this.onAppResume, this);
                if (window["wx"] && wx.createInnerAudioContext) {
                    var audio = wx.createInnerAudioContext();
                    audio.loop = true;
                    audio.obeyMuteSwitch = true;
                    this.audio = audio;
                    return;
                }
            }
        };
        SoundManager.onAppPause = function () {
            if (egret.Capabilities.isMobile && !this.audio) {
                if (this.music) {
                    this.musicPostion = this.music.position;
                    this.music.stop();
                    this.music = null;
                }
                // this.stopAllEffects();
            }
        };
        SoundManager.onAppResume = function () {
            if (egret.Capabilities.isMobile && !this.audio) {
                if (this.musicSource) {
                    this.playMusic(this.musicSource, this.musicLoop, this.musicPostion);
                }
            }
            else if (this.audio) {
                console.log("继续播放声音:" + this.audio.src);
                this.audio.play();
            }
        };
        /**
         * 播放音乐，建议用mp3格式
         * @param source 相对于resource的音乐资源路径
         * @param loop 是否循环播放
         */
        SoundManager.playMusic = function (source, loop, startTime) {
            var _this = this;
            if (loop === void 0) { loop = true; }
            if (startTime === void 0) { startTime = 0; }
            if (this.currentMusicSource == this.root + source) {
                return;
            }
            if (this.audio) {
                this.audio.src = this.root + source;
                this.audio.play();
                console.log(this.root + source);
                return;
            }
            this.currentMusicSource = this.root + source;
            if (this.music) {
                this.music.stop();
            }
            this.musicSource = this.root + source;
            this.musicLoop = loop;
            var sound = RES.getRes(this.root + source);
            if (sound) {
                sound.type = egret.Sound.MUSIC;
                this.music = sound.play(startTime, loop ? 0 : 1);
                this.music.volume = this._musicVolume;
                this.music.once(egret.Event.SOUND_COMPLETE, function (event) {
                    _this.music = null;
                }, this);
            }
            else {
                RES.getResAsync(this.root + source, function (data, key) {
                    if (data) {
                        data.type = egret.Sound.MUSIC;
                        if (_this.music) {
                            _this.music.stop();
                        }
                        _this.music = data.play();
                        _this.music.volume = _this.musicVolume;
                    }
                    else {
                        sound = new egret.Sound();
                        sound.addEventListener(egret.Event.COMPLETE, function (event) {
                            var s = event.target;
                            s.type = egret.Sound.MUSIC;
                            if (_this.music) {
                                _this.music.stop();
                            }
                            _this.music = s.play();
                            _this.music.volume = _this.musicVolume;
                        }, _this);
                        sound.load(_this.root + source);
                    }
                }, this);
            }
        };
        /**
         * 停止播放音乐
         */
        SoundManager.stopMusic = function () {
            if (this.audio) {
                this.audio.stop();
                return;
            }
            this.musicSource = null;
            this.music.stop();
            this.music = null;
        };
        /**
         * 播放音效，建议用mp3格式
         * @param source 相对于resource的音效资源路径
         * @param loop 是否循环播放
         */
        SoundManager.playEffect = function (source, loop) {
            var _this = this;
            if (loop === void 0) { loop = false; }
            if (egret.Capabilities.runtimeType != egret.RuntimeType.WXGAME) {
                return;
            }
            if (!this.effectVolume) {
                return;
            }
            if (window["wx"] && wx.createInnerAudioContext) {
                var audio = wx.createInnerAudioContext();
                audio.autoplay = true;
                audio.loop = false;
                audio.src = this.root + source;
                return;
            }
            var sound = RES.getRes(this.root + source);
            if (sound) {
                sound.type = egret.Sound.EFFECT;
                var effect = sound.play(0, loop ? 0 : 1);
                effect.volume = this._effectVolume;
                // this.effectList.push(effect);
                // effect.once(egret.Event.SOUND_COMPLETE, (event: Event): void => {
                //     var index = this.effectList.indexOf(effect);
                //     if (index != -1) {
                //         this.effectList.splice(index, 1);
                //     }
                // }, this);
            }
            else {
                RES.getResAsync(this.root + source, function (data, key) {
                    if (data) {
                        data.type = egret.Sound.EFFECT;
                        var effect = data.play(0, loop ? 0 : 1);
                        effect.volume = _this._effectVolume;
                        // this.effectList.push(effect);
                        // effect.once(egret.Event.SOUND_COMPLETE, (event: Event): void => {
                        //     var index = this.effectList.indexOf(effect);
                        //     if (index != -1) {
                        //         this.effectList.splice(index, 1);
                        //     }
                        // }, this);
                    }
                }, this);
            }
        };
        SoundManager.root = "";
        // private static effectList: egret.SoundChannel[] = [];
        SoundManager._musicVolume = 1;
        SoundManager._effectVolume = 1;
        return SoundManager;
    }());
    how.SoundManager = SoundManager;
    __reflect(SoundManager.prototype, "how.SoundManager");
})(how || (how = {}));
