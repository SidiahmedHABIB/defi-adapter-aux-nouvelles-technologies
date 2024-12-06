import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resume, ResumeRequest } from '../models/resume.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private readonly apiUrl = `${environment.apiBaseUrl}/resumes`;

  constructor(private http: HttpClient) {}

  /**
   * Fetch a resume by its ID.
   * @param resumeId - The ID of the resume.
   * @returns An observable containing the resume.
   */
  getResumeById(resumeId: string): Observable<Resume> {
    return this.http.get<Resume>(`${this.apiUrl}/${resumeId}`);
  }

  /**
   * Fetch all resumes for a specific user.
   * @param userId - The ID of the user.
   * @returns An observable containing a list of resumes.
   */
  getAllUserResumes(userId: string): Observable<Resume[]> {
    return this.http.get<Resume[]>(
      `${this.apiUrl}/get-all-user-resumes/${userId}`
    );
  }

  /**
   * Generate a resume based on user ID and job description.
   * @param userId - The user's ID.
   * @param jobDescription - The job description.
   * @returns An observable containing the generated resume.
   */
  generateResume(userId: string, jobDescription: string): Observable<Resume> {
    const body = { userId, jobDescription };
    console.log(body);
    return this.http.post<Resume>(`${this.apiUrl}/generate`, body);
  }

  /**
   * Create a new resume.
   * @param resumeData - The resume data.
   * @returns An observable containing the created resume.
   */
  createResume(resumeData: Resume): Observable<Resume> {
    return this.http.post<Resume>(this.apiUrl, resumeData);
  }

  /**
   * Create a user portfolio.
   * @param resumeData - The portfolio data.
   * @returns An observable containing the server response.
   */
  createUserPortfolio(resumeData: ResumeRequest): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/create-user-portfolio`,
      resumeData
    );
  }

  /**
   * Update an existing resume.
   * @param resumeId - The ID of the resume to update.
   * @param resumeData - The new data for the resume.
   * @returns An observable containing the updated resume.
   */
  updateResume(resumeId: string, resumeData: Partial<Resume>): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${resumeId}`, resumeData);
  }

  /**
   * Delete a resume by its ID.
   * @param resumeId - The ID of the resume to delete.
   * @returns An observable containing the server response.
   */
  deleteResume(resumeId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${resumeId}`);
  }
}
