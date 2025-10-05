import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/20 to-white geometric-pattern">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-[#E59534]/20 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#E59534] to-[#A86130] rounded-lg flex items-center justify-center">
              <Icon name="MapPin" className="text-white" size={24} />
            </div>
            <span className="font-orbitron text-2xl font-bold bg-gradient-to-r from-[#E59534] to-[#A86130] bg-clip-text text-transparent">
              PINPOINTS
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="text-[#74492D] hover:text-[#E59534] transition-colors">О продукте</a>
            <a href="#features" className="text-[#74492D] hover:text-[#E59534] transition-colors">Возможности</a>
            <a href="#how" className="text-[#74492D] hover:text-[#E59534] transition-colors">Как работает</a>
            <a href="#reviews" className="text-[#74492D] hover:text-[#E59534] transition-colors">Отзывы</a>
          </nav>
          <Button 
            className="bg-gradient-to-r from-[#E59534] to-[#CC903A] text-white font-medium hover:from-[#CC903A] hover:to-[#A86130] shadow-lg"
            onClick={() => window.open('https://t.me/pinpoints_bot?start=landing.su', '_blank')}
          >
            Открыть бот
          </Button>
        </div>
      </header>

      <section className="relative pt-32 pb-20 px-4 min-h-[90vh] flex items-center bg-[#1A1A1A]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/files/01084452-b2c5-4f69-9ca0-c4c132e5dd1a.png" 
            alt="PinPoints Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-white"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-2xl">
              Ваш личный эксперт в путешествиях
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Забудьте о чтении сотен отзывов. Познакомьтесь с вашим личным помощником на базе ИИ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#E59534] to-[#A86130] text-white font-orbitron text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                onClick={() => window.open('https://t.me/pinpoints_bot?start=landing.su', '_blank')}
              >
                <Icon name="Send" className="mr-2" size={20} />
                Начать диалог
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-[#E59534] text-[#A86130] font-orbitron text-lg px-8 py-6 rounded-full hover:bg-[#E59534]/10"
                onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Как это работает
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16 animate-scale-in">
            {[
              { icon: "Car", label: "Авто" },
              { icon: "Bike", label: "Вело" },
              { icon: "Footprints", label: "Пешие" },
              { icon: "Caravan", label: "Ванлайф" }
            ].map((item, i) => (
              <Card key={i} className="border-2 border-[#E59534]/30 hover:border-[#E59534] hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <Icon name={item.icon} className="text-[#E59534] mx-auto mb-3" size={32} />
                  <p className="font-medium text-[#74492D]">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-r from-[#E59534]/5 via-[#CC903A]/5 to-[#E59534]/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-12 text-[#814B29]">
            Наша техно-магия
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E59534] to-[#A86130] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-[#814B29] mb-2">ИИ нового поколения</h3>
                  <p className="text-[#74492D]">На первый взгляд мы не отличаемся от площадок с отзывами, но это не так!</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#CC903A] to-[#9F7249] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-[#814B29] mb-2">Безопасные данные</h3>
                  <p className="text-[#74492D]">Наше значительное отличие — уникальные алгоритмы использующие ИИ на 100%</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#A86130] to-[#875B3C] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="TrendingUp" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-[#814B29] mb-2">Актуальность</h3>
                  <p className="text-[#74492D]">Наши ноу-хау — это наша техно-магия, позволяющая получать абсолютно актуальные, максимально полезные данные без необходимости изучения сотен отзывов</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#E59534] via-[#CC903A] to-[#9F7249] p-8 rounded-3xl shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-[#E59534]/20 rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-[#E59534]" size={16} />
                    </div>
                    <div className="flex-1 bg-[#E59534]/10 rounded-2xl rounded-tl-none p-4">
                      <p className="text-sm text-[#74492D]">Где поесть в центре города с видом на реку?</p>
                    </div>
                  </div>
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#E59534] to-[#A86130] rounded-full flex items-center justify-center">
                      <Icon name="Bot" className="text-white" size={16} />
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-[#E59534] to-[#CC903A] rounded-2xl rounded-tr-none p-4">
                      <p className="text-sm text-white">Отлично подойдет «Терраса на набережной». Коллективный разум подтверждает панорамный вид и свежую кухню 🍽️</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-6 text-[#814B29]">
            Что вы можете делать?
          </h2>
          <p className="text-center text-xl text-[#74492D] mb-16 max-w-3xl mx-auto">
            Диалог с коллективным разумом, основанным на опыте тысяч путешественников
          </p>
          
          <div className="space-y-8">
            <Card className="border-2 border-[#E59534]/30 hover:border-[#E59534] transition-all overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E59534] to-[#A86130] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Search" className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-2xl font-bold text-[#814B29] mb-2">Найти идеальное место</h3>
                    <p className="text-[#74492D] mb-4">Получите детальный совет на основе обработанных данных</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#E59534]/5 to-[#CC903A]/5 p-6 rounded-xl border border-[#E59534]/20">
                  <p className="text-[#5D3A23] mb-2"><strong>Вы:</strong> «Ищу уютное кафе в центре с хорошим кофе и розетками для работы»</p>
                  <p className="text-[#814B29]"><strong className="text-[#E59534]">Бот:</strong> «Отлично подойдет Кофейня у Анны. Коллективный разум подтверждает, что там один из лучших в городе эспрессо и стабильный Wi-Fi. Многие отмечают удобные рабочие места у окна. Правда, по вечерам может быть шумно»</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#CC903A]/30 hover:border-[#CC903A] transition-all overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#CC903A] to-[#9F7249] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-2xl font-bold text-[#814B29] mb-2">Поговорить с экспертом</h3>
                    <p className="text-[#74492D] mb-4">Задавайте уточняющие вопросы, как знающему другу</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#CC903A]/5 to-[#9F7249]/5 p-6 rounded-xl border border-[#CC903A]/20 space-y-3">
                  <p className="text-[#5D3A23]"><strong>Вы:</strong> «А там действительно тихо днем, чтобы сосредоточиться?»</p>
                  <p className="text-[#814B29]"><strong className="text-[#CC903A]">Бот:</strong> «Да, до 17:00 обычно очень спокойно, идеальная атмосфера для работы»</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#A86130]/30 hover:border-[#A86130] transition-all overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#A86130] to-[#875B3C] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Star" className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-2xl font-bold text-[#814B29] mb-2">Поделиться впечатлением</h3>
                    <p className="text-[#74492D] mb-4">Ваш опыт сделает рекомендации ещё точнее</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#A86130]/5 to-[#875B3C]/5 p-6 rounded-xl border border-[#A86130]/20">
                  <p className="text-[#5D3A23] mb-2"><strong>Вы:</strong> «В кафе У Анны просто божественные круассаны! Кофе отличный, но цены немного кусаются»</p>
                  <p className="text-[#814B29]"><strong className="text-[#A86130]">Бот:</strong> «Спасибо, ваш голос учтен! Он пополнит нашу базу знаний и поможет сделать следующие рекомендации ещё точнее»</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="how" className="py-20 px-4 bg-gradient-to-b from-white via-[#E59534]/5 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-6 text-[#814B29]">
            Как это работает?
          </h2>
          <p className="text-center text-xl text-[#74492D] mb-16 max-w-3xl mx-auto">
            Наша «кухня» — это многоуровневая обработка данных
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#E59534] via-[#CC903A] to-[#A86130] -translate-y-1/2 z-0"></div>
            
            {[
              {
                step: "01",
                icon: "Filter",
                title: "Сбор и очистка",
                description: "Собираем отзывы и пропускаем через фильтры, чтобы отсеять спам, накрутки и необъективные мнения",
                color: "from-[#E59534] to-[#CC903A]"
              },
              {
                step: "02",
                icon: "Sparkles",
                title: "Создание «идеальных» данных",
                description: "Система анализирует сотни мнений, выявляя плюсы, минусы и нюансы. Вы получаете одно объективное описание вместо сотен противоречивых отзывов",
                color: "from-[#CC903A] to-[#A86130]"
              },
              {
                step: "03",
                icon: "MessageSquare",
                title: "Диалог со знанием",
                description: "На ваши вопросы чат-бот отвечает на основе «идеальной» базы знаний, давая взвешенные ответы как настоящий эксперт",
                color: "from-[#A86130] to-[#875B3C]"
              }
            ].map((item, i) => (
              <Card key={i} className="relative z-10 border-2 border-[#E59534]/30 hover:border-[#E59534] hover:shadow-xl transition-all">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <Icon name={item.icon} className="text-white" size={36} />
                  </div>
                  <div className="font-orbitron text-4xl font-bold text-[#E59534]/30 mb-2">{item.step}</div>
                  <h3 className="font-orbitron text-xl font-bold text-[#814B29] mb-3">{item.title}</h3>
                  <p className="text-[#74492D] leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-6 text-[#814B29]">
            Отзывы путешественников
          </h2>
          <p className="text-center text-xl text-[#74492D] mb-16">
            Реальные истории успешных взаимодействий с ботом
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Александр М.",
                type: "Автопутешественник",
                text: "Ехал через Карелию и спросил у бота про стоянки. Он не просто скинул адреса, а рассказал про каждую: где тихо, где есть дрова, где лучший вид. Сэкономил кучу времени!",
                rating: 5
              },
              {
                name: "Мария К.",
                type: "Велопутешественница",
                text: "Искала кафе с велопарковкой в незнакомом городе. Бот за секунду выдал 3 варианта с деталями про безопасность парковки и меню. Один даже давал скидку велосипедистам!",
                rating: 5
              },
              {
                name: "Дмитрий П.",
                type: "Ванлайфер",
                text: "Спросил про автомойку, где можно помыть фургон. Бот не только нашел место, но и предупредил, что въезд узкий. Реально помог избежать проблем!",
                rating: 5
              },
              {
                name: "Елена Ш.",
                type: "Пеший турист",
                text: "Готовилась к походу и уточняла у бота про магазины с туристическим снаряжением. Он сравнил цены и ассортимент, посоветовал где купить конкретно палатку. Как живой консультант!",
                rating: 5
              },
              {
                name: "Игорь В.",
                type: "Караванер",
                text: "Нужна была стоянка для каравана на ночь. Бот нашел кемпинг с электричеством и душем, даже рассказал про Wi-Fi и цены. Идеально!",
                rating: 5
              },
              {
                name: "Ольга Т.",
                type: "Автопутешественница",
                text: "Искала ресторан с детской комнатой в дороге. PinPoints нашел 2 варианта, рассказал про меню и парковку. Дети были счастливы, я — спокойна!",
                rating: 5
              }
            ].map((review, i) => (
              <Card key={i} className="border-2 border-[#E59534]/20 hover:border-[#E59534] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array(review.rating).fill(0).map((_, i) => (
                      <Icon key={i} name="Star" className="text-[#E59534] fill-[#E59534]" size={20} />
                    ))}
                  </div>
                  <p className="text-[#74492D] mb-4 leading-relaxed">{review.text}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#E59534]/20">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#E59534] to-[#A86130] rounded-full flex items-center justify-center">
                      <Icon name="User" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-[#814B29]">{review.name}</div>
                      <div className="text-sm text-[#74492D]">{review.type}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-[#E59534] via-[#CC903A] to-[#A86130]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы поговорить с коллективным разумом?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Дайте себе силу коллективного опыта тысяч людей, упакованную в простой и дружеский диалог
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#E59534] font-orbitron text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all hover:bg-white/90"
              onClick={() => window.open('https://t.me/pinpoints_bot?start=landing.su', '_blank')}
            >
              <Icon name="Send" className="mr-2" size={20} />
              Начать диалог бесплатно
            </Button>
          </div>
          <p className="text-white/80 mt-6 text-sm">
            Бесплатно для путешественников • Работает в Telegram
          </p>
        </div>
      </section>

      <footer className="bg-[#1A1A1A] text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#E59534] to-[#A86130] rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" className="text-white" size={24} />
                </div>
                <span className="font-orbitron text-2xl font-bold bg-gradient-to-r from-[#E59534] to-[#A86130] bg-clip-text text-transparent">
                  PINPOINTS
                </span>
              </div>
              <p className="text-white/70">Ваш личный помощник и друг в путешествиях</p>
            </div>
            <div>
              <h3 className="font-orbitron font-bold mb-4">Навигация</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-white/70 hover:text-[#E59534] transition-colors">О продукте</a>
                <a href="#features" className="block text-white/70 hover:text-[#E59534] transition-colors">Возможности</a>
                <a href="#how" className="block text-white/70 hover:text-[#E59534] transition-colors">Как работает</a>
                <a href="#reviews" className="block text-white/70 hover:text-[#E59534] transition-colors">Отзывы</a>
              </div>
            </div>
            <div>
              <h3 className="font-orbitron font-bold mb-4">Контакты</h3>
              <div className="space-y-2">
                <a href="https://t.me/pinpoints_bot?start=landing.su" target="_blank" rel="noopener noreferrer" className="block text-white/70 hover:text-[#E59534] transition-colors">
                  Telegram бот
                </a>
                <a href="https://pinpoints.su/" className="block text-white/70 hover:text-[#E59534] transition-colors">
                  pinpoints.su
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            © 2025 PinPoints. Бесплатно для путешественников
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;