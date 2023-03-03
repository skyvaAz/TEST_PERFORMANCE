import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '50s', target: 1 },
    { duration: '50s', target: 100 },
    { duration: '50s', target: 200 },
    { duration: '40s', target: 0},
  
  ],
};

export default function () {
    const url = 'http://localhost:8080/api/utilisateurs';
    const payload = {
      "nom": "az",
      "prenom": "soukaina",
      "email": "az.soukaina@example.com",
      "dateNaissance": "2023-03-22T05:18:53.000+00:00",
      "etat": "actif",
      "token": "jlkjlkjkl",
      "role": "USER"
    };
    const headers = { 'Content-Type': 'application/json' };
    const response = http.post(url, JSON.stringify(payload), { headers });
    console.log("BEFORE");

    check(response, { 'status was 201': (r) => r.status === 201 });
    console.log("aFTER")
    
}
