import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  public languages = ["JavaScript", "Python", "Java", "C#", "PHP", "C", "Haskell"]

  public webSkills = [
    "React", "TypeScript", "Node.js", "Tailwind", "Material-UI", "HTML5 & CSS3", "React Native", "GraphQL", "Python", "REST API", "Webpack", "Babel", "SQL", "Mongo DB"
  ]

  public miscellaneous = [
    "JIRA", "Git", "Bitbucket", "Jenkins"
  ]
}
