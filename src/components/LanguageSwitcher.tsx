import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="uppercase text-xs font-medium">{i18n.language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background border border-sand/20">
        <DropdownMenuItem 
          onClick={() => changeLanguage('fr')}
          className="cursor-pointer hover:bg-sand/20"
        >
          <span className="mr-2">🇫🇷</span> Français
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLanguage('en')}
          className="cursor-pointer hover:bg-sand/20"
        >
          <span className="mr-2">🇬🇧</span> English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
