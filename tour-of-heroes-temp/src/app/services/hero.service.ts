import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HeroService {
    heroes: Hero[] = [];
    apiUrl: string = 'http://localhost:3000/heroes';

    constructor(private http: HttpClient) { }

    getAllHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.apiUrl);
    }
    getHeroById(id: number): Observable<Hero> {
        return this.http.get<Hero>(`${this.apiUrl}/${id}`);
    }
    addHero(hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.apiUrl, hero);
    }
    renameHero(hero: Hero): Observable<Hero> {
        return this.http.put<Hero>(`${this.apiUrl}/${hero.id}`, hero);
    }
    deleteHero(id: number): Observable<Hero> {
        return this.http.delete<Hero>(`${this.apiUrl}/${id}`);
    }
}
