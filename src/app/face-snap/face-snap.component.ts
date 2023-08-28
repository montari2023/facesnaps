import { Component,OnInit,Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!:FaceSnap;
  
  title!:string;
  description!:string;
  createdDate!:Date ;
  snaps!:number;
  imageUrl!:string;
  buttonText:string='Snap!';

  constructor(private FaceSnapsService:FaceSnapsService,
              private router:Router){}
  ngOnInit(): void {
  }
  
  UnSnap(){
    if (this.buttonText==='Snap!'){
      this.buttonText='Snaped';
      this.FaceSnapsService.snapFaceSnapsById(this.faceSnap.id,'Snap!');
    }else{
      this.buttonText='Snap!';
      this.FaceSnapsService.snapFaceSnapsById(this.faceSnap.id,'Snaped');
    }
  }
  onView():void{
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);

  }
}
