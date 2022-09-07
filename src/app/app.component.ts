import { AfterContentInit, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  imgSrc:string='./../assets/off_white.jpg'
  imgAlt:string='Image'
  // imgSize:string='480 480'

  fullName:string='Rakha Andi Wibowo'
  color:string='purple'
  fontSize:string='5rem'
  fontWeight:string='600'
  styles={color:'blue',fontSize:'5rem',fontWeight:'600'}


  disabled: boolean = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.disabled = true;
    }, 2000);
    setInterval(()=>{
      if(this.color==='purple')this.color="pink"
      else if(this.color==='pink') this.color='purple'
      
    },2000)
   
  }
   
    
  
    
  

  

}
