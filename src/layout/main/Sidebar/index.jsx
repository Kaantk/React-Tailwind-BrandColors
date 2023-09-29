import Logo from "~/assets/img/logo.png";
import Advertisement from "~/assets/img/Advertisement.jpg";

export default function Sidebar() {
  return (
    <div className="w-full h-full flex flex-col relative pt-10">
      <header className="h-10 flex items-center gap-2 absolute top-0 -left-[20px]">
        <img src={Logo} alt="BrandColors Logo" className="h-10 w-10" />
        <a
          href="/"
          className="text-2xl leading-10 text-color-secondary hover:text-blue-normal"
        >
          Brand<strong>Colors</strong>
        </a>
      </header>
      <h2 className="mt-[30px] mb-5 text-color-primary">
        The biggest collection of official brand color codes around. Curated by{" "}
        <a href="https://twitter.com/brandcolors" target="_blank">
          @brandcolors
        </a>{" "}
        and <a href="https://github.com/brandcolors/feedback/issues">friends</a>
      </h2>
      <nav className="pb-5 border-b-[1px] border-l-gray-light">
        <ul>
          <li className="hover:text-blue-normal text-color-secondary font-bold h-8">
            <a href="https://github.com/brandcolors/feedback" target="_blank">
              Suggest a Brand
            </a>
          </li>
          <li className="hover:text-blue-normal text-color-secondary font-bold h-8">
            <a href="#" data-modal="#about">
              About BrandColors
            </a>
          </li>
        </ul>
      </nav>
      <a
        href="https://www.designbombs.com/how-to-make-a-website/"
        className="skillshare mt-5 border-b-[1px] border-l-gray-light pb-5 "
        target="_blank"
      >
        <p className="mb-[5px]">
          Brand<strong>Colors</strong> + DesignBombs
        </p>
        <span className="text-color-primary hover:text-blue-normal text-[14px] tracking-tight">
          Learn how to make a website - we have put together an in-depth guide
          that will help you build your first website with WordPress.
        </span>
      </a>
      <div className="mt-[30px]">
        <a
          href="https://stock.adobe.com/tr?clickref=1011lxQ6YJpN&mv=affiliate&mv2=pz&as_camptype=&as_channel=affiliate&as_source=partnerize&as_campaign=buysellads"
          target="_blank"
        >
          <img
            src={Advertisement}
            alt="Advertisement Photo"
            className="w-[130px] h-25"
          />
        </a>
        <p className="text-color-primary mb-[10px] mt-5">
          <a
            href="https://srv.carbonads.net/ads/click/x/GTND42J7CWAIL23UCV7LYKQNF6BIK2JICTYDTZ3JCYAIK23UCAYIVK3KCWSD5K3WCAAIL53NC6BD627WCYBI527KC6SDL2Q7FTBI6K3EHJNCLSIZ?segment=placement:brandcolorsnet;"
            target="_blank"
            rel="noopener sponsored"
          >
            Get 10 Free Images From Adobe Stock. Start Now.
          </a>
        </p>
        <a
          href="http://carbonads.net/?utm_source=brandcolorsnet&amp;utm_medium=ad_via_link&amp;utm_campaign=in_unit&amp;utm_term=carbon"
          className="text-color-third text-[10px] uppercase"
          target="_blank"
          rel="noopener sponsored"
        >
          ads via Carbon
        </a>
      </div>
    </div>
  );
}
