import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quem Somos</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            A LWL SOLUTIONS ATUA COMO PROVEDORA DE DESENVOLVIMENTO SOCIAL E RENTABILIDADE, RESPEITANDO TODAS AS LEIS E
            SEUS COLABORADORES, FOCADA 100% NAS SOLUÇÕES E ATENDIMENTO AOS CLIENTES DE FORMA EFICIENTE, ÍNTEGRA E ÉTICA.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-gray-700">
                RESPONSÁVEL EM FACILITAR O LANÇAMENTO E CONTROLE DE DADOS DE CADA CLIENTE, DE FORMA RÁPIDA E ÁGIL, PARA
                QUE POSSAM TOMAR AS MELHORES DECISÕES NO DIA A DIA.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Nossa Visão</h3>
              <p className="text-gray-700">
                SER REFERÊNCIA EM LUCRATIVIDADE PARA PROFISSIONAIS E CLIENTES DENTRO DO AGRONEGÓCIO ATRAVÉS DE NOSSOS
                PRODUTOS, AGILIDADE E SERVIÇOS.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Nossos Valores</h3>
              <p className="text-gray-700">
                ALTA QUALIDADE NO ATENDIMENTO, AGILIDADE EM SERVIR, ATUANDO SEMPRE EM EQUIPE E COM RESPEITO AO PRÓXIMO.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

