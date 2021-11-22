import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {

  noticias: any;
  constructor() { }
  ngOnInit(): void {

    this.noticias = [
      {
        img: "assets/img/noticia/1.jpg",
        titlo: "Dose adicional da vacina contra a covid-19 é liberada para grupos prioritários nesta sexta-feira",
        previa: "Em Guarulhos, a ampliação da dose adicional da vacina contra a covid-19, que teve o intervalo reduzido de seis para cinco meses da segunda dose para a dose de reforço, será realizada em duas etapas.",
        href: "https:/www.guarulhos.sp.gov.br/article/dose-adicional-da-vacina-contra-covid-19-e-liberada-para-grupos-prioritarios-nesta-sexta"
      },
      {
        img: "assets/img/noticia/2.jpeg",
        titlo: "Guarulhos reduz intervalo entre doses da vacina AstraZeneca para 8 semanas",
        previa: "Desde quarta-feira (27), Guarulhos reduziu o intervalo da aplicação da segunda dose da vacina AstraZeneca de 12 para 8 semanas. Com isso, todas as pessoas com 18 anos ou mais e que tenham tomado a primeira dose do imunizante há pelo menos 56 dias, estão aptas a completar o esquema vacinal.",
        href: "https://www.guarulhos.sp.gov.br/article/guarulhos-reduz-intervalo-entre-doses-da-vacina-astrazeneca-para-8-semanas"
      },
      {
        img: "assets/img/noticia/3.jpeg",
        titlo: "Intervalo entre doses da vacina Pfizer é reduzido para 21 dias",
        previa: "Diante da nova estratégia definida pelo Plano Estadual de Imunização, Guarulhos passa a aplicar a segunda dose da Pfizer em pessoas com 18 anos ou mais, após 21 dias da data de aplicação da primeira dose do mesmo imunizante.",
        href: "https://www.guarulhos.sp.gov.br/article/intervalo-entre-doses-da-vacina-pfizer-e-reduzido-para-21-dias"
      },
      {
        img: "assets/img/noticia/4.jpg",
        titlo: "Dúvidas sobre a vacinação contra a Covid-19",
        previa: "*Última atualização 19/11/2021<br><br><br>1 - Quem pode se vacinar contra a covid-19?<br>Todas as pessoas com 12 anos ou mais.",
        href: "https://www.guarulhos.sp.gov.br/article/duvidas-sobre-vacinacao-contra-covid-19"
      },
      {
        img: "assets/img/noticia/5.jpeg",
        titlo: "Informação de utilidade pública sobre Covid-19 em Guarulhos",
        previa: "Dados da Vigilância Epidemiológica Municipal desta sexta-feira (19 /11/2021):<br><br><br>Taxa de cura – 93,36%<br><br><br>Taxa de letalidade – 5,83%<br><br> <br>Total de recuperados – 79.752",
        href: "https://www.guarulhos.sp.gov.br/article/informacao-de-utilidade-publica-sobre-covid-19-em-guarulhos-275"
      },
    ];
  }

}
