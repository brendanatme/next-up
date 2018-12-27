/**
 * pages/province
 * 
 * TODO: implement design for this page
 * and get content from RCU team
 */
import { Link } from '../routes';
import Layout from '../components/layout';
import Button from '../components/button';
import data from '../data/index.json';

const ProvinceSidebar = (province) => (
  <div className="province__subheader">
    <p>
      Capital: Charlettown<br />
      Population: 13,448,494<br />
      Area: 1,076,395 km<sup>2</sup>
    </p>
    <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
    <h3 className="copy-13-medium">Provincial Resources:</h3>
    <p>
      <a className="link" target="_blank" href="/">Government of Ontario</a><br />
      <a className="link" target="_blank" href="/">Ontario Legislation</a>
    </p>
  </div>
);

const PAGE_TITLE = 'Provincial facts and laws';

export default class Province extends React.Component {
  static async getInitialProps({ query }) {
    return { province: query.province };
  }

  render () {
    const { province } = this.props;
    const { name, bg } = data.provinces[province];

    return (
      <Layout
        desktopSuperTitle={data.siteTitle}
        desktopTitle={PAGE_TITLE}
        headerBgImgUrl={bg}
        pageTitle={name}
        province={this.props.province}
        seoTitle={`${name} ${PAGE_TITLE}`}
        sidebar={ProvinceSidebar(this.props.province)}
        superTitle={`${data.siteTitle} - ${PAGE_TITLE}`}
        template="province"
      >
        <div className="bb oh rel">
          <div className="wrapper main__wrapper">
            <Link route={`/${province}/impaired-driving-laws`}>
              <div className="box box--large box--hoverable rhythm">
                <h3 className="display-24 black">Impaired Driving Laws</h3>
                <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                <Button label="Learn More" />
              </div>
            </Link>

            <Link route={`/${province}/growing-regulations`}>
              <div className="box box--large box--hoverable rhythm">
                <h3 className="display-24 black">Growing Regulations</h3>
                <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                <Button label="Learn More" />
              </div>
            </Link>

            <Link route={`/${province}/retail-operations`}>
              <div className="box box--large box--hoverable rhythm">
                <h3 className="display-24 black">Retail Operations</h3>
                <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                <Button label="Learn More" />
              </div>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}
