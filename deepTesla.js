{
	"network" : [
		{ "type" : "input", "out_sx" : 200, "out_sy" : 66, "out_depth" : 3 },
		{ "type" : "conv", "sx" : 3, "filters" : 8, "stride" : 1, "pad" : 2, "activation" : "relu" },
		{ "type" : "pool", "sx" : 2, "stride" : 2},
		{ "type" : "conv", "sx" : 3, "filters" : 8, "stride" : 1, "pad" : 2, "activation" : "relu" },
		{ "type" : "pool", "sx" : 2, "stride" : 2},
		{ "type" : "conv", "sx" : 3, "filters" : 8, "stride" : 1, "pad" : 2, "activation" : "relu" },
		{ "type" : "pool", "sx" : 3, "stride" : 3 },
		{ "type" : "regression", "num_neurons" : 1 }
	],
	"trainer" : { "method" : "adadelta", "batch_size" : 4, "l2_decay" : 0.0001 }
}