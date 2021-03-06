import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import EmptySpace from '../../../components/empty-space'
import IntegralActivity from '../../../components/integral-activity'
import SubtitleBar from '../../../components/subtitle-bar'
import TextBNCC from '../../../components/text/bncc'
import Activities from '../../../services/activities'

/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class Four extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 1' subtitle='Organizando Documentos' />
          <p>Como resultado das atividades dos alunos, haverá vários documentos apresentando informações sobre as ruas onde os alunos residem. Poderia ser interessante que os alunos buscassem explorar o conteúdo dessa coleção de documentos, com o objetivo de construir conhecimento. 
 </p>
          <EmptySpace />

      
          
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Ciências, Geograﬁa, História, Matemática e Língua Portuguesa.
</TextBNCC>
          <EmptySpace />
          <p>Considere a seguinte sequência de pilares do Pensamento Computacional (e as correspondentes letras que os identiﬁcam):
</p>
          <p><span style={{color:'red'}}>a)</span>  Decomposição;</p>
          <p><span style={{color:'red'}}>b)</span>  Abstração;</p>
          <p><span style={{color:'red'}}>c)</span>  Algoritmos;</p>
          <p><span style={{color:'red'}}>d)</span>  Reconhecimento de Padrões.;</p>
          <p>Associe cada uma das tarefas a seguir com o pilar do Pensamento Computacional <b>mais adequado</b> para a sua execução e, logo após, marque a opção correta de sequência de letras: </p>

<p><b>T1</b> - Identiﬁcar as características em comum que facilitem agrupar os estabelecimentos encontrados, considerando a natureza da atividade principal do estabelecimento;</p>
<p><b>T2</b> - Descrever o percurso a ser percorrido por cada aluno para sair de sua casa e visitar cada um dos estabelecimentos identiﬁcados em sua rua;</p>
<p><b>T3</b> - Produzir uma apresentação sobre a natureza dos nomes de ruas, considerando um conjunto de tipos previamente deﬁnidos (por exemplo: nomes de pessoas, locais, eventos, datas comemorativas, outros);
</p>
<p><b>T4</b> - Agrupar os textos dos alunos, considerando a quantidade de estabelecimentos não residenciais relacionados em cada lista. </p>


          <IntegralActivity activity={Activities.getMicromundoIIIActiviryOne(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Four
