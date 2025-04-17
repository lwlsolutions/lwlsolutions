import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Beef, Wheat, Truck } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Sistema de Gestão para Pecuária de Corte",
      description:
        "Solução completa para gerenciamento de rebanho, controle de peso, rastreabilidade, manejo sanitário e análise de desempenho para pecuaristas.",
      icon: <Beef className="h-10 w-10 text-white" />,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Sistema de Gestão para Agricultura",
      description:
        "Plataforma integrada para planejamento de safra, monitoramento de plantio, controle de insumos, análise de produtividade e gestão financeira agrícola.",
      icon: <Wheat className="h-10 w-10 text-white" />,
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Sistema de Gestão para Transportes",
      description:
        "Ferramenta completa para controle de frota, roteirização, monitoramento de entregas, manutenção preventiva e análise de custos operacionais.",
      icon: <Truck className="h-10 w-10 text-white" />,
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Projetos</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Desenvolvemos sistemas de gestão completos para diferentes setores, proporcionando soluções eficientes e
            personalizadas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="border-none shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center">
                  {project.icon}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-6">{project.description}</p>
                <Button className="w-full bg-gray-900 hover:bg-gray-800">Saiba Mais</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

