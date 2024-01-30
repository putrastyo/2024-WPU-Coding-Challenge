const DNAtoRNA = (dna) => (dna.includes("T") ? dna.replaceAll("T", "U") : dna);

module.exports = DNAtoRNA;
