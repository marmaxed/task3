import ListingItem from "./ListingItem";

interface Item {
  listing_id: number;
  url: string;
  MainImage: { url_570xN: string };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

interface ListingProps {
  items?: Item[];
}

const Listing = ({ items = [] }: ListingProps) => {
  return (
    <div className="item-list">
      {items.map(item =>
        item.MainImage ? (
          <ListingItem key={item.listing_id} item={item} />
        ) : null
      )}
    </div>
  );
};

export default Listing;