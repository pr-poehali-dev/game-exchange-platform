import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedGame, setSelectedGame] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState("home");
  const [walletBalance, setWalletBalance] = useState(0);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({
    username: "GameTrader123",
    email: "trader@example.com",
    rating: 4.8,
    completedDeals: 42,
    joinDate: "Январь 2024",
  });

  const games = [
    { id: "cs2", name: "CS2", items: 0 },
    { id: "dota2", name: "Dota 2", items: 0 },
    { id: "roblox", name: "Roblox", items: 0 },
    { id: "tf2", name: "TF2", items: 0 },
    { id: "rust", name: "Rust", items: 0 },
    { id: "pubg", name: "PUBG", items: 0 },
  ];

  const featuredItems = []; // Товары создают только пользователи биржи

  const filteredItems = featuredItems.filter((item) => {
    const matchesGame =
      selectedGame === "all" || item.game.toLowerCase() === selectedGame;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesGame && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#1A1A2E]">
      {/* Header */}
      <header className="bg-[#16213E] border-b border-[#16213E]/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Icon name="Gamepad2" className="text-[#E94560]" size={28} />
                <h1 className="text-xl font-bold text-white">GameExchange</h1>
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                <button
                  onClick={() => setCurrentPage("home")}
                  className={`text-gray-300 hover:text-white transition-colors ${
                    currentPage === "home" ? "text-white font-semibold" : ""
                  }`}
                >
                  Главная
                </button>
                <button
                  onClick={() => setCurrentPage("marketplace")}
                  className={`text-gray-300 hover:text-white transition-colors ${
                    currentPage === "marketplace"
                      ? "text-white font-semibold"
                      : ""
                  }`}
                >
                  Торговая площадка
                </button>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <>
                  <Dialog open={isWalletOpen} onOpenChange={setIsWalletOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-[#E94560] text-[#E94560] hover:bg-[#E94560] hover:text-white"
                      >
                        <Icon name="Wallet" size={16} className="mr-2" />
                        {walletBalance}₽
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#16213E] border-gray-600 max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-white">Кошелек</DialogTitle>
                        <DialogDescription className="text-gray-400">
                          Управление балансом вашего аккаунта
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#E94560] mb-2">
                            {walletBalance}₽
                          </div>
                          <p className="text-gray-400">Текущий баланс</p>
                        </div>
                        
                        <Tabs defaultValue="deposit" className="w-full">
                          <TabsList className="grid w-full grid-cols-2 bg-[#1A1A2E]">
                            <TabsTrigger value="deposit" className="text-white data-[state=active]:bg-[#E94560]">
                              Пополнить
                            </TabsTrigger>
                            <TabsTrigger value="withdraw" className="text-white data-[state=active]:bg-[#E94560]">
                              Вывести
                            </TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="deposit" className="space-y-4">
                            <div className="space-y-3">
                              <label className="text-white text-sm">Сумма пополнения (мин. 10₽)</label>
                              <Input 
                                type="number" 
                                placeholder="100" 
                                min="10"
                                className="bg-[#1A1A2E] border-gray-600 text-white" 
                              />
                              <div className="grid grid-cols-3 gap-2">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  className="border-gray-600 text-gray-300 hover:bg-gray-600"
                                  onClick={() => {
                                    const input = document.querySelector('input[type="number"]') as HTMLInputElement;
                                    if (input) input.value = "100";
                                  }}
                                >
                                  100₽
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  className="border-gray-600 text-gray-300 hover:bg-gray-600"
                                  onClick={() => {
                                    const input = document.querySelector('input[type="number"]') as HTMLInputElement;
                                    if (input) input.value = "500";
                                  }}
                                >
                                  500₽
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  className="border-gray-600 text-gray-300 hover:bg-gray-600"
                                  onClick={() => {
                                    const input = document.querySelector('input[type="number"]') as HTMLInputElement;
                                    if (input) input.value = "1000";
                                  }}
                                >
                                  1000₽
                                </Button>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <label className="text-white text-sm">Данные карты</label>
                              <Input placeholder="1234 5678 9012 3456" className="bg-[#1A1A2E] border-gray-600 text-white" />
                              <div className="grid grid-cols-2 gap-2">
                                <Input placeholder="MM/YY" className="bg-[#1A1A2E] border-gray-600 text-white" />
                                <Input placeholder="CVC" className="bg-[#1A1A2E] border-gray-600 text-white" />
                              </div>
                            </div>
                            <Button 
                              className="w-full bg-[#E94560] hover:bg-[#E94560]/80"
                              onClick={() => {
                                const input = document.querySelector('input[type="number"]') as HTMLInputElement;
                                const amount = parseInt(input?.value || "0");
                                if (amount >= 10) {
                                  setWalletBalance(prev => prev + amount);
                                  setIsWalletOpen(false);
                                  alert(\`Баланс пополнен на \${amount}₽ (средства в заморозке до обработки)\`);
                                }
                              }}
                            >
                              Пополнить баланс
                            </Button>
                          </TabsContent>
                          
                          <TabsContent value="withdraw" className="space-y-4">
                            <div className="space-y-3">
                              <label className="text-white text-sm">Сумма вывода</label>
                              <Input 
                                type="number" 
                                placeholder="100" 
                                max={walletBalance}
                                className="bg-[#1A1A2E] border-gray-600 text-white" 
                              />
                              <p className="text-sm text-gray-400">
                                💰 Доступно: {walletBalance}₽
                              </p>
                              <p className="text-sm text-yellow-400">
                                ⏱️ Вывод обрабатывается в течение 2 дней
                              </p>
                            </div>
                            <Button 
                              className="w-full bg-[#E94560] hover:bg-[#E94560]/80"
                              disabled={walletBalance === 0}
                              onClick={() => {
                                const input = document.querySelector('input[type="number"]') as HTMLInputElement;
                                const amount = parseInt(input?.value || "0");
                                if (amount > 0 && amount <= walletBalance) {
                                  setWalletBalance(prev => prev - amount);
                                  setIsWalletOpen(false);
                                  alert(\`Заявка на вывод \${amount}₽ принята. Средства поступят в течение 2 дней.\`);
                                }
                              }}
                            >
                              Вывести средства
                            </Button>
                          </TabsContent>
                        </Tabs>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-600"
                      >
                        <Icon name="User" size={16} className="mr-2" />
                        Профиль
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#16213E] border-gray-600 max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-white">Профиль пользователя</DialogTitle>
                        <DialogDescription className="text-gray-400">
                          Информация о вашем аккаунте
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-[#E94560] rounded-full flex items-center justify-center">
                            <Icon name="User" size={32} className="text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white">{userProfile.username}</h3>
                            <p className="text-gray-400">{userProfile.email}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <Card className="bg-[#1A1A2E] border-gray-600">
                            <CardContent className="p-4 text-center">
                              <div className="flex items-center justify-center mb-2">
                                <Icon name="Star" size={20} className="text-yellow-500 mr-1" />
                                <span className="text-xl font-bold text-white">{userProfile.rating}</span>
                              </div>
                              <p className="text-gray-400 text-sm">Рейтинг</p>
                            </CardContent>
                          </Card>
                          <Card className="bg-[#1A1A2E] border-gray-600">
                            <CardContent className="p-4 text-center">
                              <div className="text-xl font-bold text-white mb-2">{userProfile.completedDeals}</div>
                              <p className="text-gray-400 text-sm">Сделок</p>
                            </CardContent>
                          </Card>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Дата регистрации:</span>
                            <span className="text-white">{userProfile.joinDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Статус:</span>
                            <Badge className="bg-green-600">Верифицирован</Badge>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Button 
                            variant="outline" 
                            className="w-full border-gray-600 text-gray-300 hover:bg-gray-600"
                          >
                            <Icon name="Settings" size={16} className="mr-2" />
                            Настройки профиля
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                            onClick={() => {
                              setIsLoggedIn(false);
                              setIsProfileOpen(false);
                              setWalletBalance(0);
                            }}
                          >
                            <Icon name="LogOut" size={16} className="mr-2" />
                            Выйти
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Dialog open={isSupportOpen} onOpenChange={setIsSupportOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-600"
                      >
                        <Icon name="MessageCircle" size={16} className="mr-2" />
                        Поддержка
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#16213E] border-gray-600 max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-white">Поддержка</DialogTitle>
                        <DialogDescription className="text-gray-400">
                          Свяжитесь с нами, если у вас есть вопросы
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <Card className="bg-[#1A1A2E] border-gray-600">
                            <CardContent className="p-4">
                              <h4 className="font-semibold text-white mb-2">Часто задаваемые вопросы</h4>
                              <div className="space-y-2">
                                <button className="text-left text-gray-300 hover:text-white text-sm block">
                                  • Как пополнить баланс?
                                </button>
                                <button className="text-left text-gray-300 hover:text-white text-sm block">
                                  • Сколько длится вывод средств?
                                </button>
                                <button className="text-left text-gray-300 hover:text-white text-sm block">
                                  • Как добавить предмет на продажу?
                                </button>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <div className="space-y-3">
                            <label className="text-white text-sm">Сообщение</label>
                            <textarea 
                              className="w-full h-24 p-3 bg-[#1A1A2E] border border-gray-600 rounded-md text-white resize-none"
                              placeholder="Опишите вашу проблему..."
                            />
                          </div>
                          
                          <Button className="w-full bg-[#E94560] hover:bg-[#E94560]/80">
                            <Icon name="Send" size={16} className="mr-2" />
                            Отправить сообщение
                          </Button>
                          
                          <div className="text-center">
                            <p className="text-gray-400 text-sm mb-2">Время ответа: обычно в течение 1 часа</p>
                            <div className="flex items-center justify-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-green-400 text-sm">Онлайн</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </>
              ) : (
                <>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-600"
                      >
                        Войти
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#16213E] border-gray-600">
                      <DialogHeader>
                        <DialogTitle className="text-white">
                          Авторизация
                        </DialogTitle>
                        <DialogDescription className="text-gray-400">
                          Войдите, чтобы покупать и продавать игровые предметы
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <Input
                          placeholder="Email"
                          className="bg-[#1A1A2E] border-gray-600 text-white"
                        />
                        <Input
                          type="password"
                          placeholder="Пароль"
                          className="bg-[#1A1A2E] border-gray-600 text-white"
                        />
                        <Button
                          className="w-full bg-[#E94560] hover:bg-[#E94560]/80"
                          onClick={() => setIsLoggedIn(true)}
                        >
                          Войти
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-[#E94560] hover:bg-[#E94560]/80">
                        Регистрация
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#16213E] border-gray-600">
                      <DialogHeader>
                        <DialogTitle className="text-white">Регистрация</DialogTitle>
                        <DialogDescription className="text-gray-400">
                          Создайте аккаунт, чтобы торговать игровыми предметами
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <Input placeholder="Email" className="bg-[#1A1A2E] border-gray-600 text-white" />
                        <Input placeholder="Никнейм" className="bg-[#1A1A2E] border-gray-600 text-white" />
                        <Input type="password" placeholder="Пароль" className="bg-[#1A1A2E] border-gray-600 text-white" />
                        <Input type="password" placeholder="Подтверждение пароля" className="bg-[#1A1A2E] border-gray-600 text-white" />
                        <Button 
                          className="w-full bg-[#E94560] hover:bg-[#E94560]/80"
                          onClick={() => setIsLoggedIn(true)}
                        >
                          Создать аккаунт
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {currentPage === "home" && (
        <section className="bg-gradient-to-r from-[#16213E] to-[#1A1A2E] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Игровая биржа <span className="text-[#E94560]">без комиссий</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Покупайте и продавайте игровые предметы безопасно. Только для
              зарегистрированных пользователей.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge
                variant="secondary"
                className="bg-[#E94560]/20 text-[#E94560] border-[#E94560]/50"
              >
                0% комиссия
              </Badge>
              <Badge
                variant="secondary"
                className="bg-[#E94560]/20 text-[#E94560] border-[#E94560]/50"
              >
                Безопасные сделки
              </Badge>
              <Badge
                variant="secondary"
                className="bg-[#E94560]/20 text-[#E94560] border-[#E94560]/50"
              >
                Быстрый вывод
              </Badge>
            </div>
          </div>
        </section>
      )}
      
      {/* Marketplace Hero */}
      {currentPage === "marketplace" && (
        <section className="bg-gradient-to-r from-[#16213E] to-[#1A1A2E] py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Торговая площадка
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Найдите и купите игровые предметы от проверенных продавцов
            </p>
            {isLoggedIn && (
              <Button className="bg-[#E94560] hover:bg-[#E94560]/80">
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить предмет на продажу
              </Button>
            )}
          </div>
        </section>
      )}

      {/* Filters and Search */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input
            placeholder="Поиск предметов..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#16213E] border-gray-600 text-white placeholder:text-gray-400"
          />
          <Select value={selectedGame} onValueChange={setSelectedGame}>
            <SelectTrigger className="bg-[#16213E] border-gray-600 text-white md:w-[200px]">
              <SelectValue placeholder="Выберите игру" />
            </SelectTrigger>
            <SelectContent className="bg-[#16213E] border-gray-600">
              <SelectItem value="all" className="text-white hover:bg-[#1A1A2E]">
                Все игры
              </SelectItem>
              {games.map((game) => (
                <SelectItem
                  key={game.id}
                  value={game.id}
                  className="text-white hover:bg-[#1A1A2E]"
                >
                  {game.name} ({game.items})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {games.map((game) => (
            <Card
              key={game.id}
              className={`bg-[#16213E] border-gray-600 hover:border-[#E94560] transition-all cursor-pointer ${
                selectedGame === game.id
                  ? "border-[#E94560] bg-[#E94560]/10"
                  : ""
              }`}
              onClick={() =>
                setSelectedGame(selectedGame === game.id ? "all" : game.id)
              }
            >
              <CardContent className="p-4 text-center">
                <Icon
                  name="Gamepad2"
                  className="text-[#E94560] mx-auto mb-2"
                  size={24}
                />
                <h3 className="text-white font-semibold">{game.name}</h3>
                <p className="text-gray-400 text-sm">{game.items} предметов</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Items */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">
            Торговая площадка
          </h3>
          {filteredItems.length === 0 ? (
            <Card className="bg-[#16213E] border-gray-600">
              <CardContent className="p-12 text-center">
                <Icon
                  name="Package"
                  className="text-gray-400 mx-auto mb-4"
                  size={64}
                />
                <h4 className="text-xl font-semibold text-white mb-2">
                  Пока здесь пусто
                </h4>
                <p className="text-gray-400 mb-6">
                  Товары на биржу добавляют только зарегистрированные
                  пользователи
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>🎮 Выставляйте предметы из любимых игр</p>
                  <p>💰 Покупайте и продавайте без комиссий</p>
                  <p>🔒 Безопасные сделки между игроками</p>
                </div>
                {!isLoggedIn && (
                  <div className="mt-6">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-[#E94560] hover:bg-[#E94560]/80">
                          Зарегистрироваться и начать торговать
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-[#16213E] border-gray-600">
                        <DialogHeader>
                          <DialogTitle className="text-white">
                            Регистрация
                          </DialogTitle>
                          <DialogDescription className="text-gray-400">
                            Создайте аккаунт, чтобы торговать игровыми
                            предметами
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <Input
                            placeholder="Email"
                            className="bg-[#1A1A2E] border-gray-600 text-white"
                          />
                          <Input
                            placeholder="Никнейм"
                            className="bg-[#1A1A2E] border-gray-600 text-white"
                          />
                          <Input
                            type="password"
                            placeholder="Пароль"
                            className="bg-[#1A1A2E] border-gray-600 text-white"
                          />
                          <Button
                            className="w-full bg-[#E94560] hover:bg-[#E94560]/80"
                            onClick={() => setIsLoggedIn(true)}
                          >
                            Зарегистрироваться
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="bg-[#16213E] border-gray-600 hover:border-[#E94560] transition-all hover:scale-105"
                >
                  {/* Здесь будут реальные товары от пользователей */}
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Stats Section - только на главной */}
        {currentPage === "home" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-[#16213E] border-gray-600">
              <CardContent className="p-6 text-center">
                <Icon
                  name="ShoppingBag"
                  className="text-[#E94560] mx-auto mb-2"
                  size={32}
                />
                <h4 className="text-2xl font-bold text-white">0</h4>
                <p className="text-gray-400">Активных предложений</p>
              </CardContent>
            </Card>
            <Card className="bg-[#16213E] border-gray-600">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Users"
                  className="text-[#E94560] mx-auto mb-2"
                  size={32}
                />
                <h4 className="text-2xl font-bold text-white">0</h4>
                <p className="text-gray-400">Пользователей</p>
              </CardContent>
            </Card>
            <Card className="bg-[#16213E] border-gray-600">
              <CardContent className="p-6 text-center">
                <Icon
                  name="TrendingUp"
                  className="text-[#E94560] mx-auto mb-2"
                  size={32}
                />
                <h4 className="text-2xl font-bold text-white">₽0</h4>
                <p className="text-gray-400">Оборот за месяц</p>
              </CardContent>
            </Card>
            <Card className="bg-[#16213E] border-gray-600">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Shield"
                  className="text-[#E94560] mx-auto mb-2"
                  size={32}
                />
                <h4 className="text-2xl font-bold text-white">100%</h4>
                <p className="text-gray-400">Безопасных сделок</p>
              </CardContent>
            </Card>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-[#16213E] border-t border-gray-600 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Gamepad2" className="text-[#E94560]" size={24} />
                <h3 className="text-lg font-bold text-white">GameExchange</h3>
              </div>
              <p className="text-gray-400">
                Безопасная торговля игровыми предметами без комиссий
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Платформа</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Как это работает
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Безопасность
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Центр помощи
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Связаться с нами
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">
                Правовая информация
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Пользовательское соглашение
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Политика конфиденциальности
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 GameExchange. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;