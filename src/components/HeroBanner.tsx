
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-brand-blue to-blue-700 overflow-hidden rounded-xl">
      <div className="absolute inset-0 opacity-20">
        {/* Pattern or background image would go here */}
        <div className="bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjQiPjxwYXRoIGQ9Ik01Mi45MzggMzQuNTczYzIuMTQ0IDAgNCAxLjgyOSA0IDQuNjM2IDAgMS41NC0uNzE3IDIuOTE0LTEuODIzIDMuNzc4Ljk3Ny43NiAxLjU3NiAxLjk4NCAxLjU3NiAzLjQ0IDAgMi4yMTUtMS4xNCA0LjE0Ni0yLjc3IDQuOTk2Ljk2My43MjYgMS42NDQgMS45MzIgMS43OTQgMy41ODIuMzM2IDEuNzMtLjM1IDMuMzQ2LTEuNzI1IDQuMDY0LTEuMzc1LjcyLTIuOTY5LjM4Mi0zLjk5NC0uODQ1LTEuNjQ0IDIuMDY3LTQuMDUzIDMuMzc3LTYuNzQgMy4zNzctMi42ODUgMC01LjA5LTEuMzA3LTYuNzM1LTMuMzctMS4wMjQgMS4yMjItMi42MTcgMS41Ni0zLjk5Ljg0LTEuMzc0LS43Mi0yLjA2LTIuMzM1LTEuNzI1LTQuMDY3LjE1LTEuNjQ1LjgzLTIuODUgMS43OS0zLjU3NC0xLjYyNy0uODUtMi43NjctMi43ODItMi43NjctNC45OTcgMC0xLjQ1Ni41OTgtMi42OCAyLjU3NS0zLjQ0QzMwLjcxNyA0Mi4xMjMgMzAgNDAuNzUgMzAgMzkuMjFjMC0yLjgwOCAxLjg1Ny00LjYzNyA0LTQuNjM3LjQ0MiAwIC44NjUuMDk4IDEuMjUuMjcyLjYyNS0yLjg0MiAyLjY1OC00Ljk2IDUuMjUtNC45NiAyLjU5MiAwIDQuNjI1IDIuMTE4IDUuMjUgNC45Ni4zODUtLjE3NC44MDgtLjI3MiAxLjI1LS4yNzJ6bS0xOS0xNC43M2MxLjYxIDAgMyAxLjM2NiAzIDMuNDc3IDAgMS4xNTQtLjUzOCAyLjE4NS0xLjM2NyAyLjgzMy43MzMuNTcgMS4xODIgMS40ODggMS4xODIgMi41OCAwIDEuNjYyLS44NiAzLjExLTIuMDggMy43NDcuNzIzLjU0NSAxLjIzMyAxLjQ1IDEuMzQ2IDIuNjg2LjI1MiAxLjI5OC0uMjYzIDIuNTEtMS4yOTQgMy4wNDgtMS4wMzIuNTQtMi4yMy4yODYtMi45OTYtLjYzMy0xLjIzMyAxLjU1LTMuMDQgMi41MzItNS4wNTUgMi41MzItMi4wMTQgMC0zLjgyLjk4Mi01LjA1My0yLjUzLS43NjYuOTE3LTEuOTYzIDEuMTctMi45OTQuNjMtMS4wMzItLjU0LTEuNTQ3LTEuNzUtMS4yOTYtMy4wNS4xMTQtMS4yMzYuNjI0LTIuMTQgMS4zNDQtMi42ODItMS4yMTgtLjYzNC0yLjA3OC0yLjA4Mi0yLjA3OC0zLjc0NyAwLTEuMDkuNDUtMi4wMDcgMS4xODItMi41NzYtLjgyOC0uNjVzLTEuMzY3LTEuNjgtMS4zNjctMi44MzNjMC0yLjExIDEuMzktMy40NzcgMy0zLjQ3Ny4zMzIgMCAuNjUuMDcyLjkzOC4yMDQuNDctMi4xMzIgMS45OTMtMy43MiAzLjkzOC0zLjcyIDEuOTQ0IDAgMy40NjYgMS41ODggMy45MzcgMy43Mi4yODgtLjEzLjYwNi0uMjA0LjkzOC0uMjA0em0zOS42MjYgNS4xNzZjMS4wNzMgMCAyIC45MSAyIDIuMzE4IDAgLjc2OS0uMzYgMS40NTYtLjkxIDEuODkuNDkuMzguNzg4Ljk5My43ODggMS43MiAwIDEuMTEtLjU3MiAyLjA3My0xLjM4NSAyLjQ5OC40OC4zNi44MjIuOTY3Ljg5NyAxLjc5LjE2OC44NjUtLjE3NSAxLjY3My0uODYzIDIuMDMyLS41OS4zMS0xLjE5Mi4yMjctMS43NTUtLjEyQzQ1LjA5NiA2MS42IDQ0IDYyIDAzIDYzIDE5Yy0uNTYyLjEwMy0xLjM4OSAwLTEuOTc4LS4zMS0uNjg3LS4zNi0xLjAzLTEuMTY3LS44NjQtMi4wMzMuMDc1LS44MjIuNDE2LTEuNDI4Ljg5Ny0xLjc5LS44MTQtLjQyMy0xLjM4LTEuMzg3LTEuMzgtMi40OTYgMC0uNzI4LjI5OC0xLjM0Ljc4OC0xLjcyLS41NS0uNDM0LS45MS0xLjEyLS45MS0xLjg5IDAtMS40MDguOTI3LTIuMzE4IDItMi4zMTguMjIgMCAuNDMuMDUuNjI0LjEzNS4zMTMtMS40MjQgMS4zMy0yLjQ4IDIuNjI2LTIuNDggMS4yOTUgMCAxLjcyIDEuMjY3IDEuOTI3IDIuNDguMzc2LS4xMTcuNTkzLS4xMzUuODEzLS4xMzV6Ii8+PC9nPjwvZz48L3N2Zz4=')] w-full h-full"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Bienvenue chez BarchaShop
          </h1>
          <p className="text-white/90 text-lg mb-8">
            Découvrez notre sélection d'accessoires auto, maison et mode à des prix imbattables. Livraison dans toute la Tunisie.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark">
              <Link to="/category/auto">
                Accessoires Auto
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Link to="/promotions">
                Voir les promotions
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
