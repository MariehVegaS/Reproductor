class AudioPlayer{
    constructor(play,dom) {
        this._play=play;
        this._dom=dom;
        console.log(this._dom);
    }
    get play() {
        return this._play;
    }

    set play(value) {
        if(value){
            document.querySelector(this._dom).play();
        }else{
            document.querySelector(this._dom).pause();
        }
    }
    get dom() {
        return this._dom;
    }

    set dom(value) {
        this._dom=value;
    }
}