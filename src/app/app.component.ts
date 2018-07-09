import { Component } from '@angular/core';
import PSPDFKit from 'pspdfkit';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    this.mohit();
  }
  title = 'app';
  mohit () {
    console.dir('mohit');
    PSPDFKit.load({
      container: '#test',
      serverUrl: 'http://localhost:5000/',
      documentId: '8',
      authPayload: {jwt: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDc3NzUxMzIsImRvY3VtZW50X2lkIjoiOCIsInBlcm1pc3Npb25zIjoiYWxsIiwiaWF0IjoxNTMxMTQ4NTMwfQ.O-gC-dOg4zzAF6q_TljGi9uHPFJpuytNexV5enwFL7FvTwZP9fCJkjoRSD0StdaEzz5Y5dIiudfdqzya5kJ-MQoRWzWTvgJWmgPE0Lb1N5w0fv63NnnnKK8WmCL1_PM0K0sR0h9IHJtWcmuCPWZfkO84amPcXZXohODRZ5so_KubyE41s8EsKPb7gqnUd54Pkymyzq6G57JlWbz1oYw5tzfBN5aWlLF9Oabc1BO8Es4IqK87dLrbnastl0hn724Gsa6bAapu0gjaOGSNJZdbjzTGBjPqaoMBH4mj8ecclmZCGIKcKRuB0dUjTKZwFOCI3sqEPIpntRJR6FJQvNc2moUhMxGBzD9gkVFMRMvA7Az28mD4-BpmHsEcFAqAuoW6o8haSIpAGFVHY1C5yzkCoDOLuIq7qmKoUsv4fylW1R_kXpk9au9FckiuIQoDVHdgFBMZP9yVLQd1BxGSrHnbWBN851DTMQJ_9BXxIL9UHCrwZ-iZ1Cb2zTqIYgzch_HM-iEzHyMf_Njh4S_l6okjVkn0nRuC5L6zwtu67CeBLAdK6kov2W3AmGGlDkNZzqghxFUxcXJKIYurDXx-PdSrV23ifUYQSev7kCOAjHqaIrBK-5ARxPcXgj86Liq07UpLNg-SO-h3FmePpmiizXus-Aj_4Ih1ZP6ENhFcgB0BS-M'},
      instant: true
    })
    .then(abc => {
      console.dir(abc);
    })
    .catch(err => {
      console.error(err);
    });
  }
}
