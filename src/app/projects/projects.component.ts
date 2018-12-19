import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
projects = [
  {
    name: 'Python - Flask - APP',
    image: 'assets/img/python_flask_app.jpg',
    description: ['User login', 'Search filtered in Database', 'CRUD functionality', 'REST architecture', 'Export to excel'],
    tag: 'python',
    source: 'https://github.com/Romugar/Python-Flask-APP',
    view: 'https://romugar-python-flask-app.herokuapp.com/'
  },
  {
    name: 'Tracker REST API ',
    image: 'assets/img/exercise_tracker.jpg',
    description: ['Create user endpoint', 'List of users endpoint', 'Add exercise endpoint', 'List of exercises endpoint'],
    tag: 'node',
    source: 'https://github.com/Romugar/Node-Exercise-Tracker-REST-API',
    view: 'https://functional-lan.glitch.me/'
  },
  {
    name: 'URL Shortener Microservice',
    image: 'assets/img/url_shortener.jpg',
    description: ['New URL endpoint', 'Error response for invalids URLs', 'Shortened URL redirect to original link'],
    tag: 'node',
    source: 'https://github.com/Romugar/Node-URL-Shortener-Microservice',
    view: 'https://lovely-tendency.glitch.me/'
  },
  {
    name: 'Request Header Parser Microservice',
    image: 'assets/img/header_parser.jpg',
    description: ['Retrieve IP address, preferred languages and system infos from user device'],
    tag: 'node',
    source: 'https://github.com/Romugar/Node-Header-Parser',
    view: 'https://fuschia-cloud.glitch.me/'
  },
  {
    name: 'Timestamp Microservice',
    image: 'assets/img/timestamp.jpg',
    description: ['APIN endpoint manage date', 'If empty return new date', 'If valid return unix and utc date', 'If invalid return error'],
    tag: 'node',
    source: 'https://github.com/Romugar/Node-Timestamp-Microservice',
    view: 'https://groovy-elk.glitch.me/'
  },
  {
    name: 'Node file metadata Microservice',
    image: 'assets/img/file_metadata.jpg',
    description: ['Form to submit a file', 'When file is uploaded return size in bytes'],
    tag: 'node',
    source: 'https://github.com/Romugar/Node-File-Metadata-Microservice',
    view: 'https://dashing-porcupine.glitch.me/'
  },
  {
    name: 'Treemap diagram',
    image: 'assets/img/treemap.jpg',
    description: ['Colors in tiles acording to its category', 'Legends with data', 'Tooltip on mouse over'],
    tag: 'd3',
    source: 'https://github.com/Romugar/D3plus-Tree-Map',
    view: 'https://codepen.io/Romugar/pen/aaeWBm'
  },
  {
    name: 'Choropleth map',
    image: 'assets/img/choropleth.jpg',
    description: ['Colors according percentage', 'Tooltip on mouse over'],
    tag: 'd3',
    source: 'https://github.com/Romugar/Choropleth-Map-D3',
    view: 'https://codepen.io/Romugar/pen/bxPEXz'
  },
  {
    name: 'Bar chart',
    image: 'assets/img/bar_chart.jpg',
    description: ['Axes with labels', 'Tooltip on mouse over'],
    tag: 'd3',
    source: 'https://github.com/Romugar/D3-Bar-Chart',
    view: 'https://codepen.io/Romugar/pen/ZMPKev'
  },
  {
    name: 'Heat map',
    image: 'assets/img/heat_map.jpg',
    description: ['Colors according range', 'Tooltip on mouse over'],
    tag: 'd3',
    source: 'https://github.com/Romugar/Heat-Map-with-D3',
    view: 'https://codepen.io/Romugar/pen/gdJPro'
  },
  {
    name: 'Scatterplot graph',
    image: 'assets/img/scatterplot.jpg',
    description: ['Tooltip on mouse over'],
    tag: 'd3',
    source: 'https://github.com/Romugar/D3-Scatterplot-Graph',
    view: 'https://codepen.io/Romugar/pen/wEZBXb'
  },
  {
    name: 'Markdown previewer',
    image: 'assets/img/markdown_previewer.jpg',
    description: ['Markdown editor', 'Preview render', 'Marked library'],
    tag: 'react',
    source: 'https://github.com/Romugar/Markdown_Previewer_React',
    view: 'https://codepen.io/Romugar/pen/ZMqBXz'
  },
  {
    name: 'Drum machine',
    image: 'assets/img/drum_machine.jpg',
    description: ['Two banks of sounds', 'Play with keyboard or mouse', 'String describing the audio clip'],
    tag: 'react',
    source: 'https://github.com/Romugar/Drum_Machine_React',
    view: 'https://codepen.io/Romugar/pen/LJXYBr'
  },
  {
    name: 'Calculator',
    image: 'assets/img/calculator.jpg',
    description: ['Add, subtract, multiply and divide in a chain', 'Button to clear the display',
    'Delete button to clear one character', 'Responsive', 'No eval()', 'Android clone calculator style'],
    tag: 'angular',
    source: 'https://github.com/Romugar/Angular-Basic-Calculator-Mobile-clone.',
    view: 'https://romugarcalculatorv2.herokuapp.com/'
  },
  {
    name: 'Pomodoro clock',
    image: 'assets/img/pomodoro_clock.jpg',
    description: ['You can reset the clock', 'You can customize the length of the session and break'],
    tag: 'javascript',
    source: 'https://github.com/Romugar/JavaScript-Pomodoro-Clock',
    view: 'https://codepen.io/Romugar/pen/wJprvZ'
  },
  {
    name: 'Tic Tac Toe',
    image: 'assets/img/tic_tac_toe.jpg',
    description: ['Choose X or O', 'The min-max algorith is not implemented'],
    tag: 'javascript',
    source: 'https://github.com/Romugar/JavaScript-Tic-Tac-Toe',
    view: 'https://codepen.io/Romugar/pen/MpPeZg'
  },
  {
    name: 'Simon',
    image: 'assets/img/simon.jpg',
    description: ['classic simon game', 'You can choose easy game or strict'],
    tag: 'javascript',
    source: 'https://github.com/Romugar/JavaScript-Simon-game',
    view: 'https://codepen.io/Romugar/pen/QpXyMG'
  },
  {
    name: 'Algorithms',
    image: 'assets/img/algorithms.jpg',
    description: ['Symmetric difference', 'Inventory update', 'Pairwise', 'Buble sort', 'Selection sort', 'Insertion sort', 'Quick sort'],
    tag: 'javascript',
    source: 'https://github.com/Romugar/JS-Algorithms',
    view: ''
  },
  {
    name: 'Data Structures',
    image: 'assets/img/data_structures.jpg',
    description: ['Stack - LIFO', 'Queue - FIFO', 'Priority queue', 'Circular queue', 'Set', 'Map data', 'Hash table'],
    tag: 'javascript',
    source: 'https://github.com/Romugar/JS-Data-Structures',
    view: ''
  }
];
filteredBy = '';

  constructor() {}

filter(value: string) {
  this.filteredBy = value;
}

}
