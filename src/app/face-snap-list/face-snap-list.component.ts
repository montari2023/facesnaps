import { Component , OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  Facesnaps!:FaceSnap[];

  constructor(private FaceSnapsService:FaceSnapsService){}

  ngOnInit(): void {
    this.Facesnaps=this.FaceSnapsService.getAllFaceSnaps();
  
    
  }

  

}
