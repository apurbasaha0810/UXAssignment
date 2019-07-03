import { Component, Input } from '@angular/core';
import { VIDEOS, Video } from '../model/video';

@Component({
    selector: 'my-video-player',
    templateUrl: '../videoplayer.component.html'
})
export class VideoPlayerComponent {
    videos = VIDEOS;
    title: String = '';
    url: String = '';
    addedVideoList: Array<Video> = [];

    addVideo() {
        let addedVideo = new Video();
        addedVideo.title = this.title;
        addedVideo.url = this.url;
        this.addedVideoList.push(addedVideo);
    }
}