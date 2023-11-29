import { Schema, model, models } from 'mongoose';

const JokeSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  joke: {
    type: String,
    required: [true, 'Joke is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }
});

const Joke = models.Joke || model('Joke', JokeSchema);

export default Joke;