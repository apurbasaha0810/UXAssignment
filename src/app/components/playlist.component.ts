import { Component, OnInit ,Input } from '@angular/core';
import { Video } from '../model/Video';

@Component({
    selector: 'my-playlist',
    templateUrl: '../playlist.component.html'
})
export class PlaylistComponent {
    @Input() video: Video;
    deleteFlag: String = '';
    approvedFlag: String = '';

    deleteVideo(){
        this.video = new Video();
        this.deleteFlag = 'Deleted';
    }

    approveVideo(){
        this.approvedFlag = 'Approved';
    }
}