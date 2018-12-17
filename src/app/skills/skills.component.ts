import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skillsNames = ['Web Development', 'Front-end Libraries', 'Backend', 'Other'];
  imagePath = [
    ['assets/img/html5.png', 'assets/img/css3.png', 'assets/img/javascript.png', 'assets/img/typescript.png', 'assets/img/python.png'],
    ['assets/img/bootstrap.png', 'assets/img/jquery.png', 'assets/img/sass.png', 'assets/img/react.png', 'assets/img/angular.png'],
    ['assets/img/nodejs.png', 'assets/img/flask.png', 'assets/img/mongodb.png'],
    ['assets/img/d3.png', 'assets/img/github.png', 'assets/img/heroku.png', 'assets/img/joomla.png',
    'assets/img/photoshop.png', 'assets/img/wordpress.png']];
  imageDescription = [['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Python'],
    ['Bootstrap', 'jQuery', 'SASS', 'React', 'Angular'],
    ['Node', 'Flask', 'MongoDB'],
    ['D3', 'GitHub', 'Heroku', 'Joomla', 'Photoshop', 'Wordpress']];


  constructor() {}
}
