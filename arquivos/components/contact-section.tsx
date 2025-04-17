import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Estamos prontos para ajudar sua empresa a alcançar novos patamares de eficiência e produtividade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input type="text" placeholder="Nome" className="bg-gray-800 border-gray-700 text-white" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" className="bg-gray-800 border-gray-700 text-white" />
                </div>
              </div>
              <div>
                <Input type="text" placeholder="Assunto" className="bg-gray-800 border-gray-700 text-white" />
              </div>
              <div>
                <Textarea placeholder="Mensagem" className="bg-gray-800 border-gray-700 text-white min-h-[150px]" />
              </div>
              <Button className="w-full bg-white text-gray-900 hover:bg-gray-200">Enviar Mensagem</Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Phone className="h-6 w-6 text-gray-300" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Telefone</h4>
                  <p className="text-gray-300">(XX) XXXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Mail className="h-6 w-6 text-gray-300" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <p className="text-gray-300">contato@lwlsolutions.com.br</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <MapPin className="h-6 w-6 text-gray-300" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Endereço</h4>
                  <p className="text-gray-300">
                    Av. Exemplo, 1234 - Bairro
                    <br />
                    Cidade - Estado, CEP: 00000-000
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6">Horário de Atendimento</h3>
              <div className="space-y-2">
                <p className="text-gray-300">Segunda a Sexta: 8h às 18h</p>
                <p className="text-gray-300">Sábado: 9h às 13h</p>
                <p className="text-gray-300">Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

