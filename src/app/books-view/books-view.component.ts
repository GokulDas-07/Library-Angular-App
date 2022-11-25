import { Component } from '@angular/core';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css']
})
export class BooksViewComponent {
  books:any=[
    {"image":"https://th.bing.com/th/id/R.f130ff77f75101067d9cc5818e307ca7?rik=Fw6L%2bImNwU%2bSaw&riu=http%3a%2f%2ftesseraguild.com%2fwp-content%2fuploads%2f2018%2f06%2fHobbit.jpg&ehk=0xpERpQ3Zvv7CZHZts86OPPva7nqdaM33H9h%2b932pG0%3d&risl=&pid=ImgRaw&r=0",
    "title":"The Hobbit",
    "price":"519"
  },
  {"image":"https://i.pinimg.com/originals/0b/c8/b6/0bc8b6222b8ba11df18f0cfc05a56709.jpg",
    "title":"Tolkien Hobbit",
    "price":"699"
  },
  {"image":"https://godofsmallthing.com/myfiles/2020/08/The-Man-who-Saw-Everything-Fiction-Book-1334x2048.jpg",
    "title":"The Man Who Saw Everything",
    "price":"741"
  },
  {"image":"https://th.bing.com/th/id/OIP.8cvwSTuzRrOmZh6Z7Zxf1gHaLH?pid=ImgDet&w=506&h=760&rs=1",
    "title":"The Family Next Door",
    "price":"569"
  },
  {"image":"https://i.ebayimg.com/images/g/GH0AAOSw1dVeamUv/s-l640.jpg",
    "title":"More Than a Whisper",
    "price":"1110"
  },
  {"image":"https://i.pinimg.com/736x/ea/44/bb/ea44bbf40100a0ad3c818ae2dd1bedd8--fiction-books-true-stories.jpg",
    "title":"Harry a History",
    "price":"1201"
  },
  {"image":"https://th.bing.com/th/id/OIP.otlc9oZeLTyrh-A8AJDDugAAAA?pid=ImgDet&w=314&h=500&rs=1",
    "title":"Twelfth Night",
    "price":"911"
  },
  {"image":"https://i.pinimg.com/originals/29/7b/6c/297b6c191d9840135bac165819c01b84.jpg",
    "title":"Watership Down",
    "price":"511"
  }

  ]

}
