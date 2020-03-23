import React from 'react';

import {
  Card,
  CardContent,
  Chip,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from "@material-ui/core";

import Carousel from "../../../components/UI/Carousel";

const WordCard = ({ wordImages, wordDefinition }) => {
  const [expanded, setExpanded] = React.useState(0);

  const onExpandedChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Card>
      <div>
        <Carousel images={wordImages} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {wordDefinition.word}
          </Typography>
          {Object.keys(wordDefinition.meaning).map((key, index) => {
            return (
              <ExpansionPanel
                key={key}
                square
                expanded={expanded === index}
                onChange={onExpandedChange(index)}
              >
                <ExpansionPanelSummary>
                  <Typography>{key}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <ul>
                    {wordDefinition.meaning[key].map((variant, index) => (
                      <li key={index}>
                        <p>{variant.definition}</p>
                        <p><i>{variant.example}</i></p>
                        {variant.synonyms?.map(synonym => (
                          <Chip key={synonym} label={synonym} />
                        ))}
                      </li>
                    ))}
                  </ul>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            )
          })}
        </CardContent>
      </div>
    </Card>
  );
};

export default WordCard;
