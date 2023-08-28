import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { ActivatedRoute } from '@angular/router';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {

  

  faceSnap!:FaceSnap;

  title!:string;
  description!:string;
  createdDate!:Date ;
  snaps!:number;
  imageUrl!:string;
  buttonText:string='Snap!';

  constructor(private FaceSnapsService:FaceSnapsService,
    private route:ActivatedRoute ){}
  ngOnInit(): void {


        const facesnapId=+this.route.snapshot.params['id'];
        this.faceSnap=this.FaceSnapsService.getFaceSnapsById(facesnapId);

    

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

}
