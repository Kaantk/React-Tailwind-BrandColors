import Brand from "./brand";
import Search from "./search";
import brands from "~/data/brands.json";

export default function Content() {
  const brandsData = Object.values(brands);

  return (
    <div className="pt-[55px] max-w-[2027px]">
      <Search />
      <section>
        {brandsData.map((brand, index) => (
          <Brand brand={brand} key={index} />
        ))}
      </section>
    </div>
  );
}
