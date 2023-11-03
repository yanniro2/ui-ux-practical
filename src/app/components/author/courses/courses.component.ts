import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

    courses: any[] = [
    {
      id: 1,
      name: 'Course 1',
      image: 'assets/images/prof.png',
        subscribers: 100,
        status: 'published',
    },
    {
      id: 2,
      name: 'Course 2',
      image: 'assets/images/prof.png',
      subscribers: 0,
      status: 'Draft',
    },
    {
      id: 3,
      name: 'Course 3',
      image: 'assets/images/prof.png',
      subscribers: 0,
      status: 'Draft',
    },
    {
      id: 4,
      name: 'Course 4',
      image: 'assets/images/prof.png',
      subscribers: 150,
      status: 'Published',
    },
    {
      id: 5,
      name: 'Course 5',
      image: 'assets/images/prof.png',
      subscribers: 0,
      status: 'Draft',
    }, {
      id: 6,
      name: 'Course 6',
      image: 'assets/images/prof.png',
      subscribers: 150,
      status: 'Published',
    }, {
      id: 7,
      name: 'Course 7',
      image: 'assets/images/prof.png',
      subscribers: 150,
      status: 'Published',
    }, {
      id: 8,
      name: 'Course 8',
      image: 'assets/images/prof.png',
      subscribers: 150,
      status: 'Published',
    }, {
      id: 9,
      name: 'Course 9',
      image: 'assets/images/prof.png',
      subscribers: 0,
      status: 'Draft',
    }, {
      id: 10,
      name: 'Course 10',
      image: 'assets/images/prof.png',
      subscribers: 150,
      status: 'Published',
    }, {
      id: 11,
      name: 'Course 11',
      image: 'assets/images/prof.png',
      subscribers: 0,
      status: 'Draft',
    }, {
      id: 12,
      name: 'Course 12',
      image: 'assets/images/prof.png',
      subscribers: 0,
      status: 'Draft',
    }, {
      id: 13,
      name: 'Course 13',
      image: 'assets/images/prof.png',
      subscribers: 150,
      status: 'Published',
    },
    ]
  
  tabs: string[] = ['All', 'Published', 'Draft'];
  selectedTab: string = 'All'; // Initialize with 'All'

  // Initialize filteredCourses with all courses
  filteredCourses: any[] = this.courses;

  constructor() { }

  ngOnInit(): void {
    // Filter courses initially based on the selected tab
    this.filterCourses();
  }

  filterCourses() {
    if (this.selectedTab === 'All') {
      this.filteredCourses = this.courses; // Show all courses
    } else {
      this.filteredCourses = this.courses.filter(course => course.status === this.selectedTab);
    }
  }

  updateTab(tab: string) {
    this.selectedTab = tab;
    this.filterCourses();
  }
}
