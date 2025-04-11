
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Code, Smartphone, Database, ShoppingCart, MessageSquare, Users, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  const { toast } = useToast();

  const handleContact = () => {
    toast({
      title: "¡Gracias por tu interés!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden min-h-screen flex items-center justify-center"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div 
          className="container mx-auto px-4 text-center"
          variants={fadeIn}
        >
          <motion.div
            variants={floatAnimation}
            animate="animate"
            className="mb-8"
          >
            <img alt="Logo Apasep" className="w-24 h-24 mx-auto mb-6" src="https://images.unsplash.com/photo-1585065799297-ce07d1855c01" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Soluciones TI Innovadoras
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            En Apasep, transformamos ideas en éxito digital con soluciones a medida para tu empresa
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              onClick={handleContact}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20"
            >
              Comienza Ahora <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-32 relative"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-white"
            variants={fadeIn}
          >
            Nuestros Servicios
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Code />}
              title="Desarrollo Web"
              description="Creamos páginas web modernas y responsivas, desde landing pages hasta portales complejos."
            />
            
            <ServiceCard
              icon={<Smartphone />}
              title="Aplicaciones Móviles"
              description="Desarrollamos aplicaciones Android/iOS funcionales y escalables."
            />
            
            <ServiceCard
              icon={<Database />}
              title="Migración de Datos"
              description="Ofrecemos migraciones de bases de datos seguras, sin pérdidas."
            />
            
            <ServiceCard
              icon={<ShoppingCart />}
              title="Tiendas Web"
              description="Diseñamos tiendas web optimizadas para maximizar tus ventas."
            />
            
            <ServiceCard
              icon={<Users />}
              title="Marketing Digital"
              description="Proveemos publicidad digital y estrategias de redes sociales efectivas."
            />
            
            <ServiceCard
              icon={<MessageSquare />}
              title="Chatbots Automatizados"
              description="Implementamos chatbots inteligentes para mejorar la atención al cliente."
            />
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="secondary" 
                size="lg"
                onClick={handleContact}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
              >
                Contactar Ahora <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <motion.div 
      className="relative group"
      variants={fadeIn}
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-white/40 transition-colors duration-300">
        <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <div className="text-white">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </motion.div>
  );
}
