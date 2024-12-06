import { Component } from '@angular/core';
import {
  Resume,
  ResumeRequest,
} from '../../../../services/models/resume.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResumeService } from '../../../../services/services/resume.service';
import { environment } from '../../../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrl: './create-resume.component.css',
})
export class CreateResumeComponent {
  userId!: string;
  resumeList!: Resume[];
  langsList: string[] = [];
  intersList: string[] = [];
  profileForm!: FormGroup;
  langsFormGroup!: FormGroup;
  intsFormGroup!: FormGroup;
  userName: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private resumeService: ResumeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      fname: [''], // Ensure the control is initialized
      lname: [''],
      contact: this.formBuilder.group({
        email: [''],
        phone: [''],
        address: [''],
        linkedin: [''],
        github: [''],
      }),
      profile: this.formBuilder.group({
        title: [''],
        description: [''],
      }),
      experience: this.formBuilder.group({
        xtitle: [''],
        company: [''],
        location: [''],
        startDate: [''],
        endDate: [''],
        xdescription: [''],
        skills: [''],
      }),
      education: this.formBuilder.group({
        degree: [''],
        major: [''],
        university: [''],
        location: [''],
        startDate: [''],
        endDate: [''],
        relevantCourses: [
          'Object-Oriented Design',
          'Design Patterns',
          'Unit and Integration Testing',
          'Database Knowledge',
          'Cloud Architectures',
          'Troubleshooting',
        ],
      }),
      projects: this.formBuilder.group({
        ptitle: [''],
        pdescription: [''],
        technologies: [''],
      }),
    });

    this.langsFormGroup = this.formBuilder.group({
      keyword: [],
    });
    this.intsFormGroup = this.formBuilder.group({
      keyword: [],
    });
    this.userName = localStorage.getItem(environment.userName);
  }

  // manage languages and intersests
  onAddLangToResume() {
    console.log('test add lang');
    this.langsFormGroup.value.keyword !== null
      ? this.langsList.push(this.langsFormGroup.value.keyword)
      : null;
    console.log(this.langsFormGroup.value.keyword);
    this.langsFormGroup.reset();
  }
  onRemoveLangFromResume(key: string) {
    this.langsList = this.langsList.filter((item) => item !== key);
  }
  onAddIntersToResume() {
    this.intsFormGroup.value.keyword !== null
      ? this.intersList.push(this.intsFormGroup.value.keyword)
      : null;
    this.intsFormGroup.reset();
  }
  onRemoveIntersFromResume(key: string) {
    this.intersList = this.intersList.filter((item) => item !== key);
  }
  // manage languages and intersests
  handlEditResume() {
    console.log(this.userId);

    let resumeRequest: ResumeRequest = {
      userId: this.userId,
      fname: 'Sidi',
      lname: 'Habib',
      contact: {
        email: 'sidiahmedhabib@gmail.com',
        phone: '34136507',
        location: 'sousse, tunis',
        linkedin: '',
        github: '',
      },
      profile: {
        title: 'Software Engineer Intern',
        description:
          'Learn the architecture of the components maintained by the team for PS5 services. Maintain, update, and extend RESTful Web Services APIs. Work with algorithms that handle massive data sets to power these APIs. Produce detailed design and development documentation. Develop using agile methodology.',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university: 'Your University',
          location: 'Your City, Your Country',
          startDate: new Date(),
          endDate: new Date(),
          relevantCourses: [
            'Java 8+',
            'JEE 7+',
            'Spring Framework',
            'Microservices Architecture',
            'CI/CD Environment',
            'Apache Kafka',
          ],
        },
      ],
      experience: [
        {
          title: 'Software Engineer Intern',
          company: 'Sony Interactive Entertainment',
          location: 'San Mateo or San Diego or Remote',
          startDate: new Date(),
          endDate: new Date(),
          description:
            'Learn the architecture of the components maintained by the team for PS5 services. Maintain, update, and extend RESTful Web Services APIs. Work with algorithms that handle massive data sets to power these APIs. Produce detailed design and development documentation. Develop using agile methodology.',
          skills: [
            'Java',
            'RESTful Web Services',
            'Agile Methodology',
            'CI/CD',
            'NoSQL',
            'SQL',
            'Kubernetes',
            'AWS',
          ],
        },
      ],
      projects: [
        {
          title: 'Software Engineer Intern',
          description:
            'Learn the architecture of the components maintained by the team for PS5 services. Maintain, update, and extend RESTful Web Services APIs. Work with algorithms that handle massive data sets to power these APIs. Produce detailed design and development documentation. Develop using agile methodology.',
          technologies: [
            'Java',
            'RESTful Web Services',
            'Agile Methodology',
            'CI/CD',
            'NoSQL',
            'SQL',
            'Kubernetes',
            'AWS',
          ],
        },
      ],
      skills: {
        technical: [
          'Java',
          'RESTful Web Services',
          'Agile Methodology',
          'CI/CD',
          'NoSQL',
          'SQL',
        ],
        tools: ['Kubernetes', 'AWS'],
        others: [
          'Strong communication skills',
          'Ability to quickly learn new technologies',
          'Backend software development',
        ],
      },
      languages: ['Arabic', 'French'],
      interests: ['Gaming', 'Technology', 'Machine Learning'],
      request: '',
      portfolio: true,
    };

    console.log(resumeRequest);

    return this.resumeService.createUserPortfolio(resumeRequest).subscribe({
      next: (resp: Resume) => {
        console.log(resp);
        Swal.fire({
          title: 'Success',
          text: 'Portifolio has been updated',
          icon: 'success',
        });
        this.router.navigateByUrl('/myresume');
      },
      error: (error) => {
        console.log(error.message);
        Swal.fire({
          title: 'Oops...',
          text: error.message,
          icon: 'error',
        });
      },
    });
  }
}
