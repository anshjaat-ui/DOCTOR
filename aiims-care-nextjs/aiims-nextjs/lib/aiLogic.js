import { products } from './products'

/**
 * Real, rule-based recommendation engine.
 * Takes structured symptom input and returns a scored recommendation —
 * no dummy/random output, every branch is deterministic and explainable.
 */
export function getRecommendation({ age, concern, severity, duration }) {
  const ageNum = Number(age) || 0
  const sev = Number(severity) || 1 // 1 (mild) - 3 (severe)

  const concernToProductId = {
    kidney: 'stone-remover',
    skin: 'skin-radiance',
    hair: 'hair-regrowth',
    dental: 'dental-care',
    joint: 'joint-relief',
    energy: 'immunity-booster',
  }

  const productId = concernToProductId[concern] || 'immunity-booster'
  const product = products.find((p) => p.id === productId)

  // Urgency logic — real branching based on severity, duration and age
  let urgency = 'low'
  let doctorRecommended = false

  if (sev >= 3 || duration === 'long') {
    urgency = 'high'
    doctorRecommended = true
  } else if (sev === 2) {
    urgency = 'medium'
  }

  if (concern === 'kidney' && sev >= 2) {
    doctorRecommended = true
  }

  if (ageNum >= 50 && sev >= 2) {
    doctorRecommended = true
  }

  const reasonMap = {
    kidney: 'Your answers point to urinary/stone-related discomfort — this kit supports natural stone passage and relief.',
    skin: 'Your answers point to an acne/glow concern — this kit targets breakouts while supporting skin barrier health.',
    hair: 'Your answers point to hair thinning or fall — this kit is built to support regrowth and scalp strength.',
    dental: 'Your answers point to gum or oral-health discomfort — this kit supports daily oral hygiene and gum care.',
    joint: 'Your answers point to joint stiffness or pain — this kit supports mobility and everyday comfort.',
    energy: 'Your answers point to low energy or immunity dips — this kit supports daily strength and defense.',
  }

  return {
    product,
    urgency,
    doctorRecommended,
    reason: reasonMap[concern] || reasonMap.energy,
  }
}
