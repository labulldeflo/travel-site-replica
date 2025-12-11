import { ExternalLink, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AffiliateWidgetProps {
  title: string;
  description: string;
  price?: string;
  rating?: number;
  link: string;
  image?: string;
  badge?: string;
  variant?: 'card' | 'inline' | 'compact';
}

const AffiliateWidget = ({ 
  title, 
  description, 
  price, 
  rating = 4.5,
  link, 
  image,
  badge,
  variant = 'card'
}: AffiliateWidgetProps) => {
  
  if (variant === 'inline') {
    return (
      <div className="flex items-center gap-4 p-4 border border-border rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
        {image && (
          <img 
            src={image} 
            alt={title}
            className="w-20 h-20 object-cover rounded-md"
          />
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold">{title}</h3>
            {badge && <Badge variant="secondary" className="text-xs">{badge}</Badge>}
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          {price && <p className="text-sm font-semibold text-ocean mt-1">{price}</p>}
        </div>
        <Button 
          size="sm" 
          className="bg-ocean hover:bg-ocean/90"
          onClick={() => window.open(link, '_blank')}
        >
          Voir l'offre
          <ExternalLink className="ml-2 h-3 w-3" />
        </Button>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="flex items-start gap-3 p-3 border border-border rounded-lg hover:shadow-md transition-shadow">
        {image && (
          <img 
            src={image} 
            alt={title}
            className="w-16 h-16 object-cover rounded"
          />
        )}
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm line-clamp-1">{title}</h4>
          <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{description}</p>
          {price && <p className="text-sm font-semibold text-ocean mt-1">{price}</p>}
          <Button 
            size="sm" 
            variant="link" 
            className="p-0 h-auto text-ocean mt-1"
            onClick={() => window.open(link, '_blank')}
          >
            Voir l'offre →
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
      {badge && (
        <div className="bg-sunset text-white text-center py-1 text-sm font-semibold">
          {badge}
        </div>
      )}
      
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-lg font-elegant group-hover:text-ocean transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            {price && (
              <span className="text-2xl font-bold text-ocean">{price}</span>
            )}
            {rating && (
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-sunset text-sunset" />
                <span className="font-semibold">{rating}</span>
                <span className="text-sm text-muted-foreground">/5</span>
              </div>
            )}
          </div>
          
          <Button 
            className="w-full bg-ocean hover:bg-ocean/90"
            onClick={() => window.open(link, '_blank')}
          >
            Voir l'offre
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            Lien affilié • Nous touchons une petite commission
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AffiliateWidget;
