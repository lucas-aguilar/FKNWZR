import React from 'react';

import { Container } from './styles';
import Answer from './Answer';
import Header from './Header';
import Navbar from '../../components/Navbar';
import Score from './Score';

function Result() {
  return (
    <Container>
      <Navbar />
      <Header />
      <Score score="3/10" />
      <Answer
        qstText="EUA decidem invadir a Europa em ato de guerra sem precedentes"
        isFake={true}
        isCorrect={true}
        links={[
          'https://g1.globo.com/economia/blog/ana-flor/post/2020/07/08/auxilio-emergencial-foi-fundamental-para-os-30percent-mais-pobres-diz-estudo.ghtml',
          'https://g1.globo.com/sp/sao-paulo/noticia/2020/07/08/mais-de-33-mil-funcionarios-da-prefeitura-de-sp-receberam-auxilio-emergencial-irregularmente.ghtml',
        ]}
      />
      <Answer
        qstText="Auxílio emergencial será pago em dobro em 2021"
        isFake={false}
        isCorrect={false}
        links={[
          'https://g1.globo.com/economia/blog/ana-flor/post/2020/07/08/auxilio-emergencial-foi-fundamental-para-os-30percent-mais-pobres-diz-estudo.ghtml',
          'https://g1.globo.com/sp/sao-paulo/noticia/2020/07/08/mais-de-33-mil-funcionarios-da-prefeitura-de-sp-receberam-auxilio-emergencial-irregularmente.ghtml',
        ]}
      />
    </Container>
  );
}

export default Result;
