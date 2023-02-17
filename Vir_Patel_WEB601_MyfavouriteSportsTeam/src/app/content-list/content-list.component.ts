import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  template: `
    <div *ngFor="let content of contents">
      <app-content-card [content]="content"></app-content-card>
    </div>
  `,
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contents = [    { id: 1, title: 'Content 1', image: '', description: '', creator: '', type: '', tags: [] },
    { 
        id: 1,
        title: 'Cricket',
        description: 'Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket ',
        imgURL: 'https://en.wikipedia.org/wiki/Cricket#/media/File:Pollock_to_Hussey.jpg',
        type: 'Sports',
        tags: ['Bat','Ball']
     },
     {
        id: 2,
        title: 'Football',
        description: ' Football also known as gridiron, is a team sport played by two teams of eleven players on a rectangular field with goalposts at each end. ',
        imgURL: 'https://imageio.forbes.com/specials-images/imageserve/f8daa0af7e434237bdce15dd97e2cff0/TITANS-CHIEFS-MAHOMES/960x0.jpg?format=jpg&width=960',
        type: '',
        tags: ['ball,kick']
     },
     {
        id: 3,
        title: 'Cricket',
        description: 'Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket ',
        imgURL: 'https://en.wikipedia.org/wiki/Cricket#/media/File:Pollock_to_Hussey.jpg',
        type: 'Sports',
        tags: ['Bat','Ball']
     },
     {
        id: 4,
        title: 'Cricket',
        description: 'Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket ',
        imgURL: 'https://en.wikipedia.org/wiki/Cricket#/media/File:Pollock_to_Hussey.jpg',
        type: 'Sports',
        tags: ['Bat','Ball']
     },
     {
        id: 5,
        title: 'Cricket',
        description: 'Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket ',
        imgURL: 'https://en.wikipedia.org/wiki/Cricket#/media/File:Pollock_to_Hussey.jpg',
        type: 'Sports',
        tags: ['Bat','Ball']
     },
     {
        id: 6,
        title: 'Cricket',
        description: 'Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket ',
        imgURL: 'https://en.wikipedia.org/wiki/Cricket#/media/File:Pollock_to_Hussey.jpg',
        type: 'Sports',
        tags: ['Bat','Ball']
   },
   {
    id: 7,
    title: 'Cricket',
    description: 'Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket ',
    imgURL: 'https://en.wikipedia.org/wiki/Cricket#/media/File:Pollock_to_Hussey.jpg',
    type: 'Sports',
    tags: ['Bat','Ball']
   },
  ];

  
}