import PointingList from 'components/PaintingList';
import Section from 'components/Section';
import pointer from './painting.json';

export default function App() {
  return (
    <div>
      <Section title="Топ продаж">
        <PointingList items={pointer} />
      </Section>
      <Section />
    </div>
  );
}
