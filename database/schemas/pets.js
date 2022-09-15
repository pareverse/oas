import mongoose from 'mongoose'

const PetSchema = mongoose.Schema({
	name: {
		type: String,
		default: ''
	},

	price: {
		type: Number,
		default: 0
	}
})

const Pets = mongoose.models.Pets || mongoose.model('Pets', PetSchema)

export default Pets
