import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { VideoService } from '../service/video.service';

@Component({
    selector: 'my-controls',
    templateUrl: '../controls.component.html'
})
export class ControlsComponent implements OnInit {
    @Input('count') count: number = 0
    unliked: number = 0
    @Output('countIncremented') countIncremented: EventEmitter<number> = new EventEmitter();
    disabled: String = "";

    constructor(private videoService: VideoService) {

    }

    ngOnInit() {

    }

    playVideo(event: any) {
        console.log('playing')
        this.videoService.callMyFunction();
        this.disabled = "disabled";
    }

    pauseVideo(event: any) {
        console.log('pausing ')
        this.videoService.pause();
        this.disabled = "";
    }

    increaseVolume(event: any) {
        console.log('increasing volume');
        this.videoService.increaseVol();
    }

    decreaseVolume(event: any) {
        console.log('decreasing volume');
        this.videoService.decreaseVol();
    }

    reloadVideo(event: any) {
        console.log('reloading video');
        this.videoService.reload();
        this.disabled = "disabled";
    }

    muteUnMuteVideo(event: any) {
        console.log(event);
        this.videoService.muteUnMuteVideo();
    }

    increaseLike(event: any) {
        console.log('increasing like');
        this.count++;
        this.countIncremented.emit(this.count);
    }

    decreaseLike(event: any) {
        console.log('decreasing like');
        this.unliked++;
        this.countIncremented.emit(this.unliked);
    }

}