import Base from 'templates/Base'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  games?: GameCardProps[]
}

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games?.map((game, index) => (
        <GameCard key={`wishlist-${index}`} {...game} />
      ))}
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
