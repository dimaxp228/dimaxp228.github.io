console.log("PXENGINE_1.0 module Audio loaded!");
class pxAudio{
    audioBuffer;
    audioFile;
    PXAUDIOENGINE_START = false;
    initAudio(id){
        this.audioBuffer  = id;
        console.log("pxAudio init() ok");
        this.PXAUDIOENGINE_START = true;
    }
    pxLoadFile(file){
        if(this.PXAUDIOENGINE_START)
       this.audioFile = file;
       console.log("pxAudio load file"+file);
       if(!this.PXAUDIOENGINE_START){
        alert("PXAUDIOENGINE: Fatal Error!! Not InitAudio();");
       }
    }
    AudioLoad(){
        if(this.PXAUDIOENGINE_START)
        console.log("pxAudio init() ok");
        this.audioBuffer.src = this.audioFile;
        if(!this.PXAUDIOENGINE_START){
            alert("PXAUDIOENGINE: Fatal Error!! Not InitAudio();");
           }
    }
    pxPlay(){
        if(this.PXAUDIOENGINE_START)
        this.audioBuffer.play();
        console.log("pxAudio play()");
        if(!this.PXAUDIOENGINE_START){
            alert("PXAUDIOENGINE: Fatal Error!! Not InitAudio();");
           }
    }
}