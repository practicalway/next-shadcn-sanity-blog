import Image from "next/image";
import pilot from "../../../../public/images/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <Image
            src={pilot}
            alt=""
            width={300}
            height={300}
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Akademi.dev{" "}
                </span>
                Hakkında
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Akademi.dev, pratik bilgileri teorikle harmanlayan yeni nesil
                bir öğrenme platformudur. Uzman eğitmenler tarafından sunulan
                zengin içeriklerle, öğrencilerin kariyerlerini ilerletmelerine
                yardımcı oluyoruz. Esnek öğrenme programları ve interaktif
                araçlarla, pratik becerilerinizi geliştirirken teorik bilgileri
                de öğrenebilirsiniz. Akademi.dev, sizin yeni bir yol çizmenize
                ve hedeflerinize ulaşmanıza destek olmak için burada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
