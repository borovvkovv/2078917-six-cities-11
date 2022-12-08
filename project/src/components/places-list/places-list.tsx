import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlacesListProps = {
  offers: Offer[];
  setActiveCard: React.Dispatch<React.SetStateAction<Offer | null>>;
  mode: string;
};

function PlacesList({ offers, setActiveCard, mode }: PlacesListProps): JSX.Element {
  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((offer) =>
        (
          <PlaceCard
            key={offer.id}
            offer={offer}
            setActiveCard={setActiveCard}
            mode={mode}
          />
        )
      )}
    </div>
  );
}

export default PlacesList;
