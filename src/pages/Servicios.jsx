
import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Database, ShoppingCart, MessageSquare, Users } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Desarrollo Web",
    description: "Creamos páginas web modernas y responsivas, desde landing pages hasta portales complejos.",
    features: [
      "Diseño Responsivo",
      "Optimización SEO",
      "Integración con APIs",
      "Rendimiento Optimizado"
    ]
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Aplicaciones Móviles",
    description: "Desarrollamos aplicaciones Android/iOS funcionales y escalables.",
    features: [
      "Apps Nativas",
      "Diseño Intuitivo",
      "Integración con Backend",
      "Notificaciones Push"
    ]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Migración de Datos",
    description: "Ofrecemos migraciones de bases de datos seguras, sin pérdidas.",
    features: [
      "Migración Segura",
      "Cero Pérdidas",
      "Optimización",
      "Backup Automático"
    ]
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Tiendas Web",
    description: "Diseñamos tiendas web optimizadas para maximizar tus ventas.",
    features: [
      "Carrito de Compras",
      "Pasarela de Pagos",
      "Gestión de Inventario",
      "Panel Administrativo"
    ]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Marketing Digital",
    description: "Proveemos publicidad digital y estrategias de redes sociales efectivas.",
    features: [
      "SEO/SEM",
      "Redes Sociales",
      "Email Marketing",
      "Análisis de Datos"
    ]
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Chatbots Automatizados",
    description: "Implementamos chatbots inteligentes para mejorar la atención al cliente.",
    features: [
      "IA Conversacional",
      "Integración Multi-canal",
      "Respuestas Automáticas",
      "Análisis de Conversaciones"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Servicios() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas completas para impulsar tu negocio al siguiente nivel
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/60">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
