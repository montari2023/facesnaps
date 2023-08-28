import {Injectable} from '@angular/core'
import { FaceSnap } from '../models/face-snap.model';
@Injectable({
    providedIn:'root'
})
export class FaceSnapsService{
    Facesnaps:FaceSnap[]=[{id:1,title:'Bessma',description:'medecin',
    createdDate:new Date(),imageUrl:'assets/image1.jpg',snaps:255,location:'Paris'}
    ,
    {id:2,title:'Bessma',description:'medecin',
    createdDate:new Date(),imageUrl:'assets/image1.jpg',snaps:4,location:'Madrid'}
    ,
    {id:3,title:'Bessma',description:'medecin',
    createdDate:new Date(),imageUrl:'assets/image1.jpg',snaps:4}
    ];



    getAllFaceSnaps():FaceSnap[]{
        return this.Facesnaps;
    }
    snapFaceSnapsById(facesnapId:number,snapType:'Snap!' | 'Snaped'):void{
        const facesnap=this.getFaceSnapsById(facesnapId);
        snapType==='Snap!' ? facesnap.snaps++:facesnap.snaps--;
        

    }
  

    getFaceSnapsById(facesnapId:number):FaceSnap{
        const facesnap=this.Facesnaps.find(facesnap=> facesnap.id===facesnapId);
        if (!facesnap){
            throw new Error('can not found!');
        }else{
            return facesnap;
        }
    }
}