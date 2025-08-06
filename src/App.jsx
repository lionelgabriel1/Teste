import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import HeroSection from '@/components/sections/HeroSection';
import PrizeSection from '@/components/sections/PrizeSection';
import VipClubSection from '@/components/sections/VipClubSection';
import RegistrationSection from '@/components/sections/RegistrationSection';
import FinalBonusSection from '@/components/sections/FinalBonusSection';
import useContent from '@/hooks/useContent';

function App() {
  const { content, loading, error } = useContent();

  if (loading) {
    return (
      <div className="min-h-screen site-background flex items-center justify-center text-white">
        A carregar conteúdo...
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="min-h-screen site-background flex items-center justify-center text-white">
        Falha ao carregar o conteúdo. Por favor, tente novamente mais tarde.
      </div>
    );
  }

  const handleLinkClick = () => {
    window.open(content.affiliate_link, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>ElephantBet - Apostas Online | Regista-te e Ganha</title>
        <meta
          name="description"
          content="Junta-te ao ElephantBet e desfruta das melhores apostas online. Regista-te agora e recebe bónus exclusivos!"
        />
      </Helmet>

      <div className="min-h-screen site-background text-white overflow-x-hidden">
        <Toaster />
        <HeroSection
          onLinkClick={handleLinkClick}
          content={content.hero_section}
          sharedContent={content.shared_assets}
        />
        <PrizeSection
          onLinkClick={handleLinkClick}
          content={content.prize_section}
          sharedContent={content.shared_assets}
        />
        <VipClubSection
          onLinkClick={handleLinkClick}
          content={content.vip_club_section}
          sharedContent={content.shared_assets}
        />
        <RegistrationSection
          onLinkClick={handleLinkClick}
          content={content.registration_section}
        />
        <FinalBonusSection
          onLinkClick={handleLinkClick}
          content={content.final_bonus_section}
        />
      </div>
    </>
  );
}

export default App;
