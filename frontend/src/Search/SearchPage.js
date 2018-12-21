import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SubmitInput from './SubmitInput';
import Form from './Form';
import AutoCompleteList from './AutoCompleteList';
import { searchPostCodes } from './actions';
import { getSuggestions, getIsFetchingSuggestions } from './reducers';
import { Footer } from '../Footer';

class SearchPage extends Component {
  static propTypes = {
    history: PropTypes.object,
    suggestions: PropTypes.array,
    onChangePostCode: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    const { onChangePostCode } = props;
    this.changePostCode = e => onChangePostCode(e.target.value);
  }

  getInputValue = () => {
    return this.input.value;
  };

  handleKeyUp = e => {
    if (e.keyCode === 13) {
      this.handleSubmit(e);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const postCode = this.getInputValue();
    this.props.history.push(`search?postCode=${postCode}`);
  };

  render = () => {
    const { suggestions = [] } = this.props;

    return (
      <Wrapper>
        <Header>
          <Form onSubmit={this.handleSubmit}>
            <Input
              type="search"
              placeholder="Enter Postcode"
              ref={c => {
                this.input = c;
              }}
              onChange={this.changePostCode}
              onKeyUp={this.handleKeyUp}
              required
            />
            <SubmitInput />
          </Form>
          <AutoCompleteList
            items={suggestions.map(s => ({
              link: `/search?postCode=${s.postCode}`,
              text: s.text
            }))}
          />
        </Header>
        <Article>
          <Header2>Features</Header2>
          <Content>
            <Section>
              <Header3>Search houses</Header3>
              <p>Loren lipsum</p>
            </Section>
            <Section>
              <Header3>Manage issues</Header3>
              <p>Loren lipsum</p>
            </Section>
            <Section>
              <Header3>Track communication</Header3>
              <p>Loren lipsum</p>
            </Section>
            <Section>
              <Header3>Refer and earn</Header3>
              <p>Loren lipsum</p>
            </Section>
          </Content>
        </Article>
        <Footer />
      </Wrapper>
    );
  };
}

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const Wrapper = styled(FlexCol)`
  grid-area: content;
  height: 100%;
  min-height: 100vh;
  min-width: 100vw;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
`;

const Article = styled.article`
  margin: 0 auto auto;
  max-width: 60rem;
  padding: 3em 2rem;
`;

const Header2 = styled.h2`
  width: 100%;
  text-align: center;
  font-weight: 400;
  font-size: 2rem;
  color: #ff5a5f;
`;

const Header3 = styled.h3`
  display: flex;
  align-items: center;
  color: #7d93aa;
  font-size: 1.4em;
  font-weight: 400;
  margin-bottom: 0.75rem;
  margin-top: 1rem;
`;

const Section = styled.section`
  width: calc(50% - 1rem);
  font-size: 1.1rem;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const Header = styled.div`
  background-image: url('https://images.unsplash.com/photo-1451934403379-ffeff84932da?auto=format&fit=crop&w=1284&q=80');
  background-position: center;
  padding: 8rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  border: 0;
  margin: 0;
  padding: 10px;
  background: white;
  line-height: 50px;
  font-size: 20px;
  border-radius: 0;
  outline: 0;
  border-right: 1px solid rgb(0, 0, 0, 0.2);
`;

const mapStateToProps = state => ({
  suggestions: getSuggestions(state),
  isFetching: getIsFetchingSuggestions(state)
});

const mapDispatchToProps = dispatch => ({
  onChangePostCode: postCode => {
    dispatch(searchPostCodes(postCode));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
