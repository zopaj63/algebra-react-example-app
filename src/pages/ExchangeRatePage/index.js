import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";

const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io'
});

function ExchangeRates({ currency, limit }) {
    const { data, loading, error } = useQuery(gql(`
  {
    rates(currency: "${currency}") {
      currency
      rate
      name
    }
  }
  `));

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;

    return (
        <div>
            <div>Tečaj za {currency}</div>
            <ul>
                {data.rates.slice(0, limit).map((item) =>
                    <li key={item.currency}>
                        {item.currency}: {item.rate}: {item.name}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default function ExchangeRatePage() {
    return (
        <ApolloProvider client={client}>
            <div className="ExchangeRatePage">
                <h1>Exchange Rate</h1>
                <ExchangeRates currency="EUR" limit={10} />
                <ExchangeRates currency="HRK" limit={15} />
                <ExchangeRates currency="USD" limit={5} />
            </div>
        </ApolloProvider>
    );
}