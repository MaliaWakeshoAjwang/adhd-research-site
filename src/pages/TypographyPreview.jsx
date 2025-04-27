import Text from '../components/typography';

const TypographyPlayground = () => {
  return (
    <div>
      <h1 style={{ marginBottom: '2rem' }}>Typography Playground</h1>

      {/* Display */}
      <section style={{ marginBottom: '2rem' }}>
        <Text.DL>DL - Display Large</Text.DL>
        <Text.DM>DM - Display Medium</Text.DM>
        <Text.DS>DS - Display Small</Text.DS>
      </section>

      {/* Headline */}
      <section style={{ marginBottom: '2rem' }}>
        <Text.HL>HL - Headline Large</Text.HL>
        <Text.HM>HM - Headline Medium</Text.HM>
        <Text.HS>HS - Headline Small</Text.HS>
      </section>

      {/* Title */}
      <section style={{ marginBottom: '2rem' }}>
        <Text.TL>TL - Title Large</Text.TL>
        <Text.TM>TM - Title Medium</Text.TM>
        <Text.TS>TS - Title Small</Text.TS>
      </section>

      {/* Label */}
      <section style={{ marginBottom: '2rem' }}>
        <Text.LL>LL - Label Large</Text.LL><br />
        <Text.LM>LM - Label Medium</Text.LM><br />
        <Text.LS>LS - Label Small</Text.LS><br />
      </section>

      {/* Body */}
      <section style={{ marginBottom: '2rem' }}>
        <Text.BL>BL - Body Large</Text.BL>
        <Text.BM>BM - Body Medium</Text.BM>
        <Text.BS>BS - Body Small</Text.BS>
      </section>
    </div>
  );
};

export default TypographyPlayground;